// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract GearToken is ERC721, Ownable {
    constructor(string memory _name, string memory _symbol)
        ERC721(_name, _symbol)
    {}

    uint256 COUNTER; // Incremental function for indexing of NFTs

    // Gas fee function
    uint256 fee = 1 ether;

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
    function _createRandomNum(uint256 _mod) internal view returns(uint256) { // generate DNA
        uint256 randomNum = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))); // Takes the string input into function _genRandomDna and hashes it into a random number (keccak256)
        return randomNum % _mod;
    } 

    function updateFee(uint256 _fee) external onlyOwner() {
        fee = _fee;
    }

    function withdraw() external payable onlyOwner() { // Withdraw the (holding) gas fee that was paid, only users who have created NFTs can withdraw the gas they've put in
        address payable _owner = payable(owner());
        _owner.transfer(address(this).balance);
    }

    // Minting/creation stage of the token
    function _createGear(string memory _name) internal {
        uint8 randRarity = uint8(_createRandomNum(100)); // Modulus of 100 -> Random number from 1-100; converting/casting from uint256 to uint8
        uint256 randDna = _createRandomNum(10**16);
        Gear memory newGear = Gear(_name, COUNTER, randDna, 1, randRarity);
        gears.push(newGear); // Adds the new gear onto the array
        _safeMint(msg.sender, COUNTER); // Send the token to the account that initialised the transaction?, what is the identifier of the NFT that's being minted?
        emit NewGear(msg.sender, COUNTER, randDna);
        COUNTER++;
    }

    function createRandomGear(string memory _name) public payable {
        require(msg.value >= fee, "The fee is not correct"); // msg.value => how much the address input and sent to the contract
        _createGear(_name);
    }

    // Getter functions
    function getGears() public view returns(Gear[] memory){
        return gears;
    }

    function getOwnerGears(address _owner) public view returns (Gear[] memory) { // Get all of the owner's Gears
        // Filter & loop through all gears, retrieve only the owner's gears (getter)
        Gear[] memory result = new Gear[](balanceOf(_owner)); // balanceOf(_owner) => how many NFTs the owner has (from ERC721 smartcontract script from openzeppelin)
        uint256 counter = 0;
        for(uint256 i = 0; i < gears.length; i++) {
            if(ownerOf(i) == _owner) { // If the owner of the NFT is the same as the address that's calling the function
                result[counter] = gears[i];
                counter++;
            }
        }
        return result;
    }
}