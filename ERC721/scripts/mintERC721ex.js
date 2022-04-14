const { getContractFactory } = require("@nomiclabs/hardhat-ethers/types");
const hre = require("hardhat");

async function main() {
	const NFT = await hre.ethers.getContractFactory("ERC721AI");
	const arr = ["https://gateway.pinata.cloud/ipfs/QmdPuHb3iLukHzYsLibyLp8Pf57qxDfDH22dejqyx41cYa", "https://gateway.pinata.cloud/ipfs/QmQnKbabhqsDdSQg6wekeR5wkFXWMZkcBCXegVnQNnKu8U"]
	//const URL = "https://gateway.pinata.cloud/ipfs/QmdPuHb3iLukHzYsLibyLp8Pf57qxDfDH22dejqyx41cYa";
	const WALLET_ADDRESS= "0x5468505cb0A39374DaEF9a5f98812C3b03Db6902";
	const CONTRACT_ADDRESS = "0xBE0ED56271495c2D858C8002F406c417f8aeEa5b";
	
	const arr2 = ["https://gateway.pinata.cloud/ipfs/QmesqL3zmJbrQ1sNTt2rVY7HgNQLuNr2YzzyxnGakWvScH",
	"https://gateway.pinata.cloud/ipfs/QmNY6GG1aA2PBhEhG6Y4xNHFmMsYa2TthbVa8ppfTyjsfi",
	"https://gateway.pinata.cloud/ipfs/QmWDBCpKF6e1JzkGoxPQez7kmKhLRB9ZYwu3NNM68AfqeC",
	"https://gateway.pinata.cloud/ipfs/QmNv5spUuk7Xs9RP2a84hm4Lcq8opZ59BVtwF15n1PwLoj",
	"https://gateway.pinata.cloud/ipfs/QmPTBVHhDPrzSy5pM85j4SixShNqTkjNevWPm1LSKd4o7A",
	"https://gateway.pinata.cloud/ipfs/QmT3ErJZ9s2wXYqdUZqccYVMqFe6PHTUGyGnuDsr1d2GM1",
	"https://gateway.pinata.cloud/ipfs/QmbFMke1KXqnYyBBWxB74N4c5SBnJMVAiMNRcGu6x1AwQH",
	"https://gateway.pinata.cloud/ipfs/QmUTVbZSut5Ufsr93avuVutxSmSw3vJtxaunVAvgxTuGbQ",
	"https://gateway.pinata.cloud/ipfs/QmRSy8DyM1jZwp1dEhRuRSA1hMUzn1r1HSQFXdmvz3AmmC",
	"https://gateway.pinata.cloud/ipfs/QmTTi4WZsyg7Uoho3PQmRSHE9DQm5RTqx8o8iKc2QZPszb",
	"https://gateway.pinata.cloud/ipfs/Qmb5Vzf54fqPihrbj9yK33nfoFvcdk4sCBKmx36hD71T9c",
	"https://gateway.pinata.cloud/ipfs/QmebyHKLfGuj8QLhEtNR7sqWRxK4pdhdx2qEKCv9NbvMjr",
	"https://gateway.pinata.cloud/ipfs/QmbFMke1KXqnYyBBWxB74N4c5SBnJMVAiMNRcGu6x1AwQH",
	"https://gateway.pinata.cloud/ipfs/QmSBPdc51sbXzRXDnEj8fUUJ67wet3h6BeC2GUK1Xam3f4",
	"https://gateway.pinata.cloud/ipfs/QmbFMke1KXqnYyBBWxB74N4c5SBnJMVAiMNRcGu6x1AwQH",
	"https://gateway.pinata.cloud/ipfs/QmaYgWwESoPPAJkzWun613iaja83P6PSrujBq1fJ3cQLgF",
	"https://gateway.pinata.cloud/ipfs/QmXvmk6BA9FLAC6Zt5D5XyomhHp55UkozwgUUJoJGWL5Nn",
	"https://gateway.pinata.cloud/ipfs/QmXf9xMnvnSm3YzBwEhf2y7eeknbm6mN1c21qhNiRmfLfs",
	"https://gateway.pinata.cloud/ipfs/QmXZsGAVjTueWTiriBqqNeEbUbPCkXQiFTF5eK6eAhnSBA",
	"https://gateway.pinata.cloud/ipfs/QmXFhoouwGxMTY7TsPai9fSUkE7JNceuvoMujuatFoBHtZ"]

	//console.log(test.length);

	const contract = NFT.attach(CONTRACT_ADDRESS);
	//console.log(contract);

	// await contract.owner();
	await contract.safeMint(WALLET_ADDRESS, 20, arr2);
	console.log("NFT minted:", contract);
}

main().then(()=>{process.exit(0)}).catch(error=>{
	console.log(error);
	process.exit(1);
})