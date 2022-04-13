const hre = require("hardhat");

async function deploy() {
	const NFT = await hre.ethers.getContractFactory("ERC721ex");
	const nft = await NFT.deploy();

	await nft.deployed();
	console.log(nft.address);
}

deploy().then(()=>{process.exit(0)}).catch(error=>{
	console.log(error);
	process.exit(1);
})