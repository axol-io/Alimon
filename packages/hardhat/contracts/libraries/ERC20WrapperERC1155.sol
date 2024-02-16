// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v5.0.0) (token/ERC20/extensions/ERC20Wrapper.sol)

pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol";
import "@openzeppelin/contracts/interfaces/draft-IERC6093.sol";

/**
 * @dev Extension of the ERC20 token contract to support token wrapping for ERC1155.
 *
 * Users can deposit and withdraw "underlying tokens" and receive a matching number of "wrapped tokens". This is useful
 * in conjunction with other modules. For example, combining this wrapping mechanism with {ERC20Votes} will allow the
 * wrapping of an existing "basic" ERC20 into a governance token.
 *
 * _Available since v5.0._
 */
abstract contract ERC20WrapperERC1155 is ERC20, IERC1155Receiver, IERC1155Errors {
    IERC1155 private immutable _underlying;
    uint private immutable _id;

    /**
     * @dev The underlying token couldn't be wrapped.
     */
    error ERC1155InvalidUnderlying(address toke);

    constructor(IERC1155 underlyingToken, uint id) {
        if (address(underlyingToken) == address(this)) {
            revert ERC1155InvalidUnderlying(address(this));
        }
        _underlying = underlyingToken;
        _id = id;
    }

    /**
     * @dev Returns the address and id of the underlying ERC-1155 token that is being wrapped.
     */
    function underlying() public view returns (IERC1155, uint) {
        return (_underlying, _id);
    }

    function onERC1155Received(
        address operator,
        address /* from */,
        uint256 /* id */,
        uint256 /* value */,
        bytes calldata /* data */
    ) external view returns (bytes4) {
        if (operator != address(this)) revert ERC1155InvalidOperator(operator);

        return IERC1155Receiver.onERC1155Received.selector;
    }

    function onERC1155BatchReceived(
        address operator,
        address /* from */,
        uint256[] calldata /* ids */,
        uint256[] calldata /* values */,
        bytes calldata /* data */
    ) external view returns (bytes4) {
        if (operator != address(this)) revert ERC1155InvalidOperator(operator);

        return IERC1155Receiver.onERC1155BatchReceived.selector;
    }

    /**
     * @dev Allow a user to deposit underlying tokens and mint the corresponding number of wrapped tokens.
     */
    function depositFor(address account, uint256 amount) public returns (bool) {
        address sender = _msgSender();
        if (sender == address(this)) {
            revert ERC20InvalidSender(address(this));
        }
        _underlying.safeTransferFrom(sender, address(this), _id, amount, "");
        _mint(account, amount);
        return true;
    }

    /**
     * @dev Allow a user to burn a number of wrapped tokens and withdraw the corresponding number of underlying tokens.
     */
    // maybe expand to custom data
    function withdrawTo(address account, uint256 amount) public returns (bool) {
        _burn(_msgSender(), amount);
        _underlying.safeTransferFrom(address(this), account, _id, amount, "");
        return true;
    }

    /**
     * @dev Mint wrapped token to cover any underlyingTokens that would have been transferred by mistake. Internal
     * function that can be exposed with access control if desired.
     */
    function _recover(address account) internal returns (uint256) {
        uint256 value = _underlying.balanceOf(address(this), _id) - totalSupply();
        _mint(account, value);
        return value;
    }
}