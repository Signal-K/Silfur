// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.11;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    constructor () public ERC20("KinetiKoin", "SKK") { // Coin name: KinetiKoin, short name: SKK
        _mint(msg.sender, 1000000 * (10 ** uint256(decimals()))); // Minting 1000000 tokens to the sender, which is ourselves (at the start) (see bottom comments section)
    }
}

/*
    msg.sender refers to whoever is interacting with the s.contract through this function.
*/