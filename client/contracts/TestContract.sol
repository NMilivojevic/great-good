// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12 <0.9.0;

contract TestContract {
    // Function to stake ether
    function stake() external payable {}

    // Function to withdraw ether
    function withdraw(uint amount) external {}

    // Function to get balance of an account
    function balanceOf(address account) external view returns (uint) {}

    // Function to get total supply
    function totalSupply() external view returns (uint) {}

    // Function to get minimum stake amount
    function minStakeAmount() external view returns (uint) {}
}
