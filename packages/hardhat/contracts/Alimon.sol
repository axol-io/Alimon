//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "./interfaces/IBlast.sol"; // Import IBlast interface
import "./libraries/GayMath.sol";

interface IWETH {
    function deposit() external payable;
    function transfer(address to, uint256 value) external returns (bool);
}


// Pool for issuing cETH and fETH. TODO: Add maturity, TODO: add trickle governor, TODO: ERC20 wrapper for cETH
contract Alimon is 
    ERC1155,
    Ownable,
    Pausable,
    ERC1155Burnable,
    ERC1155Supply,
    ReentrancyGuard
{
    using Math for uint256;

    IWETH public weth;
    uint256 public totalDeposit;
    address public wethAddress;
    uint256 public constant cETH = 0;
    uint256 public fETHVersion = 1; // Increment this for new versions of fETH
    uint256 public fETHRateBps = 500; // Updated with new version. Sets fixed yield
    uint256 public lastUpdateBlock;
    mapping(uint256 => bool) public activeVersion; // Tracks active versions of fETH
    mapping(address => uint256) private versionAtDeposits; // Tracks version of fETH at time of deposit
    mapping(uint256 => uint256) private depositsForVersion; // Tracks deposits for specific version of fETH
    mapping(uint256 => uint256) private bpsForVersion; // Tracks deposits for specific version of fETH
    string private _uri = "https://myapi.com/api/token/{id}.json";

    constructor(address _governor) ERC1155(_uri) Ownable(msg.sender) {
        activeVersion[fETHVersion] = true;
        lastUpdateBlock = block.number;
        IBlast(0x4300000000000000000000000000000000000002).configureAutomaticYield();
        IBlast(0x4300000000000000000000000000000000000002).configureGovernor(_governor);
    }

    event YieldClaimed(address claimedBy, uint256 sharesOwned, uint256 totalShares, uint256 amountClaimed, uint256 fETHVersion);


    function setURI(string memory newuri) external onlyOwner {
        _setURI(newuri);
    }

    // Put up yield-generating ETH as collateral and mint cETH and current fETH
    function bondETHandMint() external payable nonReentrant {
        uint256 _amount = msg.value;
        require(_amount != 0, "Cant deposit 0 ETH");
        totalDeposit += _amount;
        uint256 bondToMint = GayMath.getExp(_amount, getExchangeRate());
        versionAtDeposits[msg.sender] = fETHVersion;
        depositsForVersion[fETHVersion] += _amount;

        _mint(msg.sender, fETHVersion, _amount, "");
        _mint(msg.sender, cETH, bondToMint, "");
    }

    // Mint fETH, if ETH is already bonded and you have not yet minted fETH this epoch
    // NOT SAFE TO cETH transfers and reminting
    function mint() external nonReentrant {
        require(versionAtDeposits[msg.sender] < fETHVersion, "Bond ETH collateral first!");
        uint256 _amount = balanceOf(msg.sender, 0);
        uint256 tokenToMint = GayMath.mulExp(_amount, getExchangeRate());
        versionAtDeposits[msg.sender] = fETHVersion;
        depositsForVersion[fETHVersion] += _amount;

        _mint(msg.sender, fETHVersion, tokenToMint, "");
    }

    // Reclaim your ETH
    function unbondETH(uint256 _amount) external {
        require(_amount <= balanceOf(msg.sender, cETH), "Not enough cETH!");
        require(versionAtDeposits[msg.sender] < fETHVersion, "Cannot unbond before the end of an epoch!");
        uint256 ETHToReceive = GayMath.mulExp(_amount, getExchangeRate());
        totalDeposit -= ETHToReceive;
        payable(msg.sender).transfer(ETHToReceive);
        burn(msg.sender, cETH, _amount);
    }

    // Claim fixed yield for fETH
    // Cannot disburse yield to users because we cannot query all tokenholders at once. Perhaps implement rebasing in the future
    // TODO: Add treasury fee
    function claimFixedYield(uint256 _fETHVersion) {
        uint256 _balance = balanceOf(msg.sender, _fETHVersion);
        require(_balance > 0, "No fETH of this version held!");
        require(_fETHVersion < alimoni.fETHVersion, "Cannot claim before the end of an epoch!");

        uint256 ETHToReceive = _balance.div(365).mul(bpsForVersion(_fETHVersion)); // TODO: FIX SUPPORT FOR BPS AND FIXED YIELD PAYOUT. NEEDS TO BE DAY AWARE
        payable(msg.sender).transfer(ETHToReceive);
        burn(msg.sender, _fETHVersion, _balance);

        emit YieldClaimed(msg.sender, shares, totalShares, ETHToReceive, _fETHVersion);
    }

    // Set new fixed yield and version of fETH
    function updateFETHVersionAndRate(uint256 _bps) external {
        require(
            block.number >= lastUpdateBlock + 100,
            "New version not yet available"
        );

        fETHRateBps = _bps;
        fETHVersion++; // Increment to next version
        activeVersion[fETHVersion] = true; // Activate the new version
        bpsForVersion[fETHVersion] = _bps;
        lastUpdateBlock = block.number; // Update the last update block number
    }

    // Gets current exchange rate between ETH and cETH for issuing or reclaiming
    function getExchangeRate() public view returns (uint256) {
        if (totalSupply() == 0) {
            return 1000000000000000000;
        }
        return GayMath.getExp(totalDeposit, totalSupply(cETH));
    }


    // Overrides below
    function pause() external onlyOwner {
        _pause();
    }

    function unpause() external onlyOwner {
        _unpause();
    }

    function _update(address from, address to, uint256[] memory ids, uint256[] memory values) internal override(ERC1155, ERC1155Supply) {
        return super._update(from, to, ids, values);
    }

}