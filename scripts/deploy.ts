import { ethers } from "hardhat";
import {config} from "dotenv";
async function main() {
  const AttemptWinnerCaller = await ethers.getContractFactory("AttemptWinnerCaller");
  const attemptWinnerCaller = await AttemptWinnerCaller.deploy();

  await attemptWinnerCaller.deployed();

  console.log(`AttemptWinnerCaller deployed to ${attemptWinnerCaller.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
