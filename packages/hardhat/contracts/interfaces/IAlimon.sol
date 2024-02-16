// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";

interface IAlimon is IERC1155 {
    function bondETH() external payable;
    function mint() external;
    function unbondETH(uint256 _amount) external;
    function updateFETHVersionAndRate(uint256 _newRate) external; 
    function getExchangeRate() external view returns (uint256);
}

