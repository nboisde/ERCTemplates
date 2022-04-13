const { getContractFactory } = require("@nomiclabs/hardhat-ethers/types");
const hre = require("hardhat");

String.prototype.hexEncode = function(){
    var hex, i;

    var result = "";
    for (i=0; i<this.length; i++) {
        hex = this.charCodeAt(i).toString(16);
        result += ("000"+hex).slice(-4);
    }

    return result
}

function createBytesMemoryArray(encodedHex){
	let j = 0;
	let ret_arr = [];
	ret_arr.push("");
	let tab_index = 0;
	for (let i = 0; i < encodedHex.length; i++)
	{
		if (j == 63)
		{
			//ret_arr[tab_index] = "0x" + ret_arr[tab_index];
			j = 0;
			tab_index++;
			ret_arr.push("");
		}
		if (i + 1 == encodedHex.length){
			while (ret_arr[tab_index].length != 63)
			{
				ret_arr[tab_index] += "0";
			}
			//ret_arr[tab_index] = "0x" + ret_arr[tab_index];
			break ;
		}
		else {
			ret_arr[tab_index] += encodedHex[i];
		}
		j++;
	}

	//print test.
	for (let u = 0; u < ret_arr.length; u++)
	{
		console.log(ret_arr[u], " ");
	}
	return ret_arr;
}

async function main() {
	const NFT = await hre.ethers.getContractFactory("ERC721AICollection");
//	const URL = "https://gateway.pinata.cloud/ipfs/QmdPuHb3iLukHzYsLibyLp8Pf57qxDfDH22dejqyx41cYa";
	//const URL_BYTES = 0x68747470733a2f2f676174657761792e70696e6174612e636c6f75642f697066732f516d645075486233694c756b487a59734c6962794c703850663537717844664448323264656a7179783431635961
	const arr = ["https://gateway.pinata.cloud/ipfs/QmdPuHb3iLukHzYsLibyLp8Pf57qxDfDH22dejqyx41cYa", "https://gateway.pinata.cloud/ipfs/QmQnKbabhqsDdSQg6wekeR5wkFXWMZkcBCXegVnQNnKu8U"]
	const URL = "https://gateway.pinata.cloud/ipfs/QmdPuHb3iLukHzYsLibyLp8Pf57qxDfDH22dejqyx41cYa";
	const WALLET_ADDRESS= "0x5468505cb0A39374DaEF9a5f98812C3b03Db6902";
	const CONTRACT_ADDRESS = "0x903e00014C0D1D6866E5C16a1cC87ea0F981966c";
	//const arr2 = ["0x" + arr[0].hexEncode(), "0x" + arr[1].hexEncode()]
	// createBytesMemoryArray(arr[0].hexEncode());
	// const arr2 = [createBytesMemoryArray(arr[0].hexEncode())];
	
	let test = arr[0].hexEncode();
	//test = test + "0000000000000000000000000000000000000000000000000000000000000000";
	test = "0x" + test;// + "00000000000000000000000000000000000000000000000000000000000000";
	console.log(test.length);

	//console.log("0x" + arr[0].hexEncode())
	const contract = NFT.attach(CONTRACT_ADDRESS);
	//console.log(contract);

	// await contract.owner();
	await contract.safeMint(WALLET_ADDRESS, 1, test);
	console.log("NFT minted:", contract);
}

main().then(()=>{process.exit(0)}).catch(error=>{
	console.log(error);
	process.exit(1);
})