// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

contract GearToken is ERC721, Ownable {
    constructor(string memory _name, string memory _symbol)
        ERC721(_name, _symbol)
    {}

    uint256 COUNTER; // Incremental function for indexing of NFTs

    struct Gear {
        string name;
        uint256 id;
        uint256 dna;
        uint8 level;
        uint8 rarity;
    }

    Gear[] public gears;

    event NewGear(address indexed owner, uint256 id, uint256 dna);

    // Helpers
    function _genRandomDna(string memory _str) internal pure returns(uint256) { // generate DNA
        uint256 randomNum 
    } 

    // Minting/creation stage of the token
    function _createGear(string memory _name, uint256 _dna) internal {
        Gear memory newGear = Gear(_name, COUNTER, _dna, 1, 50);
        gears.push(newGear); // Adds the new gear onto the array
        _safeMint(msg.sender, COUNTER); // Send the token to the account that initialised the transaction?, what is the identifier of the NFT that's being minted?
        emit NewGear(msg.sender, COUNTER, _dna);
        COUNTER++;
    }

    function createRandomGear(string memory _name) public {
        _createGear(_name, _dna);
    }

    // Getter functiongs
    function getGears() public view returns(Gear[] memory){
        return gears;
    }
}