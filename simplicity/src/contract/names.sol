// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract myName {

    mapping (address => string) names;

    function storeName (string memory name) public {
        names[msg.sender] = name;
    }

    function checkName() public view returns (string memory name){
        return names[msg.sender];
    }
}