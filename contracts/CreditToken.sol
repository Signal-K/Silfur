// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

contract CreditToken is ERC721, Ownable {
    uint256 COUNTER = 1; // Incremental function for indexing of NFTs, first NFT starts at 1 index

    constructor(string memory _name, string memory _symbol)
        ERC721(_name, _symbol)
    {}

    // Minting function
    function mintMyNft(address _to) public onlyOwner {
        // Only the owner of the contract can call this function
        _safeMint(_to, COUNTER); // Who is the NFT for?, what is the identifier of the NFT that's being minted?
        COUNTER++;
    }
}