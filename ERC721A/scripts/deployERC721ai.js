const { run } = require("hardhat");
const hre = require("hardhat");

async function deploy() {
	const NFT = await hre.ethers.getContractFactory("ERC721AI");
	const nft = await NFT.deploy();
	await nft.deployed();

	console.log("nft deployed to", nft.address);
}

deploy().then(()=>process.exit(0)).catch(error => {
	console.log(error);
	process.exit(1);
})