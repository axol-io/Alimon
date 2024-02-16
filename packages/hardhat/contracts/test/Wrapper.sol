// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// Implementation for ERC20WrapperERC1155

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "../libraries/ERC20WrapperERC1155.sol"; 

contract MintFixedETH is ERC20, ERC20WrapperERC1155 {
    address public yieldPoolContract;
    uint256 public ethToFEthRate = 1; // 1 ETH = 1 fETH for simplicity

    // Event declaration
    event DepositAndMint(address indexed user, uint256 ethAmount, uint256 fETHAmount);

    constructor(
        IERC1155 underlyingToken,
        uint256 id,
        string memory name,
        string memory symbol
    ) 
        ERC20(name, symbol) 
        ERC20WrapperERC1155(underlyingToken, id)
    {}

    function depositETH() public payable {
        require(msg.value > 0, "You need to send some ether");
        uint256 fETHAmount = msg.value * ethToFEthRate;
        _mint(msg.sender, fETHAmount);
        // Send ETH to the WETH contract
        (bool sent, ) = 0x4200000000000000000000000000000000000023.call{value: msg.value}(
            abi.encodeWithSignature("deposit()")
        );
        require(sent, "Failed to deposit ETH");
        // Emit the DepositAndMint event
        emit DepositAndMint(msg.sender, msg.value, fETHAmount);
    }

    // Allow the contract to receive ETH
    receive() external payable {}

    function withdrawETH(uint256 fETHAmount) public {
        uint256 ethAmount = fETHAmount / ethToFEthRate;
        _burn(msg.sender, fETHAmount);
        // Assuming YieldPoolContract has a withdraw function
        (bool success, ) = yieldPoolContract.call(
            abi.encodeWithSignature("withdrawFunds()")
        );
        require(success, "Withdrawal failed");
        payable(msg.sender).transfer(ethAmount);
    }

    function supportsInterface(bytes4 interfaceId) external override pure returns (bool) {
        return interfaceId == type(IERC20).interfaceId || interfaceId == type(IERC1155Receiver).interfaceId;
    }

}
