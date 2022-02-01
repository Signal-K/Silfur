// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    uint256 public count;

    function updateCounter(uint256 _newCount) public {
        count = _newCount;
    }
}

contract MyCounter is Counter {
    string public name = "New Counter";
}