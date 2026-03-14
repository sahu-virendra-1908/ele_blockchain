const hre = require("hardhat")

async function main() {

  const LegalCase = await hre.ethers.getContractFactory("LegalCase")

  const contract = await LegalCase.deploy()

  await contract.waitForDeployment()

  console.log("LegalCase deployed to:", contract.target)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})