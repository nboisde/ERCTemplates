const { getContractFactory } = require("@nomiclabs/hardhat-ethers/types");
const hre = require("hardhat");

async function main() {
	const NFT = await hre.ethers.getContractFactory("ERC721AICollection");
	const CONTRACT_ADDRESS = "0x903e00014C0D1D6866E5C16a1cC87ea0F981966c";

	const contract = NFT.attach(CONTRACT_ADDRESS);
	const tokenURI = await contract.tokenURI(3);
	console.log(tokenURI);
}

main().then(()=>{process.exit(0)}).catch(error=>{
	console.log(error);
	process.exit(1);
})