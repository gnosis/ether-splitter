pragma solidity ^0.4.24;

contract EtherSplitter {
    function splitEther(address[] recipients) public payable {
        uint amountForEach = msg.value / recipients.length;
        for(uint i = 0; i < recipients.length; i++) {
            recipients[i].transfer(amountForEach);
        }
    }
}
