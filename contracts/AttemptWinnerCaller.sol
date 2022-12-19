// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";

// @author NelsonRodMar.lens
contract AttemptWinnerCaller is Ownable {

    constructor() {}

    function callAttempt(address _contractAddress) public onlyOwner {
        (bool success, ) = _contractAddress.call(
            abi.encodeWithSignature("attempt()")
        );
        require(success, "attempt call failed");
    }

}
