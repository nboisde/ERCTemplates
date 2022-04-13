const { getContractFactory } = require("@nomiclabs/hardhat-ethers/types");
const hre = require("hardhat");

async function main() {
	const NFT = await hre.ethers.getContractFactory("ERC721AI");
	const arr = ["https://gateway.pinata.cloud/ipfs/QmdPuHb3iLukHzYsLibyLp8Pf57qxDfDH22dejqyx41cYa", "https://gateway.pinata.cloud/ipfs/QmQnKbabhqsDdSQg6wekeR5wkFXWMZkcBCXegVnQNnKu8U"]
	//const URL = "https://gateway.pinata.cloud/ipfs/QmdPuHb3iLukHzYsLibyLp8Pf57qxDfDH22dejqyx41cYa";
	const WALLET_ADDRESS= "0x5468505cb0A39374DaEF9a5f98812C3b03Db6902";
	const CONTRACT_ADDRESS = "0x56d08c3A1C066963B247f7cFBC07879E7fe13873";
	
	//console.log(test.length);

	const contract = NFT.attach(CONTRACT_ADDRESS);
	//console.log(contract);

	// await contract.owner();
	await contract.safeMint(WALLET_ADDRESS, 2, arr);
	console.log("NFT minted:", contract);
}

main().then(()=>{process.exit(0)}).catch(error=>{
	console.log(error);
	process.exit(1);
})