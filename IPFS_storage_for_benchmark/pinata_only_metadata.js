const fs = require('fs');
const pinataSDK = require('@pinata/sdk');
const dotenv = require('dotenv').config();

const pinata = pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_API_SECRET);

const metadata_name = "./collection_metadata.json";


const readableStreamForFile = fs.createReadStream(metadata_name);
const options = {
    pinataMetadata: {
        name: metadata_name,
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
	console.log(result);
	var string = JSON.stringify(result);
	var val = JSON.parse(string);	
	let metadata_uri = "https://gateway.pinata.cloud/ipfs/" + val.IpfsHash;
	console.log("metadata uri is:", metadata_uri);

}).catch(err=>{
	console.log(err);
	process.exit(1);
});