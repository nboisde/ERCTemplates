//import fs from "fs";
const fs = require("fs");
const pinataSDK = require("@pinata/sdk");
//import pinataSDK from "@pinata/sdk";
//import dotenv from 'dotenv';
const dotenv = require("dotenv");
//import axios from 'axios';

const dot = dotenv.config();
console.log(process.env.PINATA_API_SECRET);
const pinata = pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_API_SECRET);

//let res;

//const name = "./AIgenerativeART/A smooth and colorful painting of a cheetah robot running in a forest_3";
//const mintAddress = '0x7902a04Cb3FdE830D4D41EDE819cbAB9321899f1';
const name = "./BlackMood"

const readableStreamForFile = fs.createReadStream(name + '.png');
const options = {
    pinataMetadata: {
        name: name,
        keyvalues: {
            customKey: 'customValue',
            customKey2: 'customValue2'
        }
    },
    pinataOptions: {
        cidVersion: 0
    }
};
pinata.pinFileToIPFS(readableStreamForFile).then((result) => {
    //handle results here
    console.log(result);
	var string = JSON.stringify(result);
	var val = JSON.parse(string);
	//return val.IpfsHash;
	console.log(val.IpfsHash);
	let image_uri = "https://gateway.pinata.cloud/ipfs/" + val.IpfsHash;
	console.log(image_uri);
	let obj = {
		name : name,
		description: "test on ERC721AI",
		image: image_uri
	};
	let json_metadata = JSON.stringify(obj);
	console.log(image_uri);
	fs.writeFile(name + '_metadata.json', json_metadata, function(err, result) {

        if (err)
		{
			console.log('error', err);
		}

    });
	console.log(json_metadata);
	let rsfMetadata = fs.createReadStream(name + "_metadata.json");
	pinata.pinFileToIPFS(rsfMetadata).then((result2) => {
		console.log(result2);
		var str = JSON.stringify(result2);
		var v2 = JSON.parse(str);

		console.log(v2.IpfsHash);
		let metadata_uri = "https://gateway.pinata.cloud/ipfs/" + v2.IpfsHash;
		console.log(metadata_uri);
		//return metadata_uri;

	// 	const http = axios.create({
	// 		baseURL: "https://api-connect.starton.io/v1",
	// 		headers: {
	// 			"x-api-key": 'pk_fe6a6be2e983400aba50c369990fe706',
	// 		},
	// 	})
	// 	http.post('/smart-contract/sc_accdd85cbee047d2b44c4b163bdc24f8/interact',
	// 		{
	// 			"functionName": 'safeMint',
	// 			"params": [
	// 				mintAddress,
	// 				metadata_uri, // string 'my metadataURI'
	// 			],

	// 		}).then(response => { console.log(response.data) })
	}).catch((err)=>{
		console.log(err);
	});
	//res = result;
}).catch((err) => {
    //handle error here
    console.log(err);
});
