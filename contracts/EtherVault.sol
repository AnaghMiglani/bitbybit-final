// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EtherVault {
    // Events
    event Deposited(address indexed sender, uint256 amount);
    event Withdrawn(address indexed receiver, uint256 amount);

    // Deposit Ether into the contract
    function deposit() external payable {
        require(msg.value > 0, "Deposit amount must be greater than zero");
        emit Deposited(msg.sender, msg.value);
    }

    // Withdraw Ether from the contract to a specific recipient
    function withdraw(address payable _recipient, uint256 _amount) external {
        require(_recipient != address(0), "Invalid recipient address");
        require(address(this).balance >= _amount, "Insufficient contract balance");

        (bool success, ) = _recipient.call{value: _amount}("");
        require(success, "Transfer failed");

        emit Withdrawn(_recipient, _amount);
    }

    // Get the contract's Ether balance
    function getBalance() external view returns (uint256) {
        return address(this).balance;
    }
}
