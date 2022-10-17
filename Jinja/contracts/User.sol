pragma solidity ^0.8.0

import "stringUtils.sol";

contract userRecords[]

// Enum variable to store user gender
enum genderType[male, female]
// User object
struct user{
    string name;
    genderType gender;
}

user user_obj;

// Set user public function
function setUser(string name, string gender) public {
    genderType gender_type = getGenderFromString(gender);
    user_obj = user({ 
        name: name,
        gender: gender_type
    })
}