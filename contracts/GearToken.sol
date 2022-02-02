// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

contract GearToken is ERC721, Ownable {
    uint256 COUNTER; // Incremental function for indexing of NFTs

    struct Gear {
        string name;
        uint256 id;
        uint256 dna;
        uint8 level;
        uint8 rarity;
    }

    Gear[] public gears;

    constructor(string memory _name, string memory _symbol)
        ERC721(_name, _symbol)
    {}

    // Minting function
    function _createGear(string memory _name, uint256 _dna) internal {
        Gear memory newGear = Gear(_name, COUNTER, _dna, 1, 50);
        gears.push(newGear); // Adds the new gear onto the array
        /*_safeMint(_to, COUNTER); // Who is the NFT for?, what is the identifier of the NFT that's being minted?
        COUNTER++;*/
    }
}