const fs = require("fs");
const pinataSDK = require("@pinata/sdk");
const dotenv = require("dotenv").config();

const pinata = pinataSDK(process.env.PINATA_API_KEY, process.env.PINATA_API_SECRET);

//PARAMETERS TO CHANGE
const FOLDER = "CollectionTWOGIRLS";
const COLLECTION_DESCRIPTION = "The description collection here.";
const INFO_FOLDER = FOLDER + "_informations";

fs.mkdirSync(INFO_FOLDER, { recursive: true })


const INFO_FILE_METADATA = "./" + INFO_FOLDER + "/" + FOLDER + "_metadata_informations.txt"
const INFO_FILE_IMAGES = "./" + INFO_FOLDER + "/" + FOLDER + "_images_informations.txt"
console.log(typeof INFO_FILE_IMAGES);
console.log(INFO_FILE_IMAGES);
var FILES = fs.readdirSync('./' + FOLDER);
console.log(FILES);

function Pin_img_and_associate_metadata(folder, info_folder, file, collection_description, metadata_info_file, images_info_file){
	const readableStreamForFile = fs.createReadStream("./" + folder + "/" + file );
	const options = {
		pinataMetadata: {
			name: file,
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
		//console.log(val.IpfsHash);
		let image_uri = "https://gateway.pinata.cloud/ipfs/" + val.IpfsHash;
		console.log(image_uri);
		let register_img_uri = image_uri + "\n";

		fs.appendFile(images_info_file, register_img_uri, function (err) {
			if (err) throw err;
			//console.log('Saved!');
		  });
		// File of the name for openSEA;
		const name = file.slice(0, -4);
		let obj = {
			name : name,
			description: collection_description,
			image: image_uri
		};
		let json_metadata = JSON.stringify(obj);
		let meta = "./" + info_folder + "/" + name + '_metadata.json'
		fs.writeFile(meta, json_metadata, function(err, result) {

			if (err)
			{
				console.log('error', err);
			}
	
		});
		console.log(json_metadata);
		let rsfMetadata = fs.createReadStream(meta);
		pinata.pinFileToIPFS(rsfMetadata).then((result2) => {
			console.log(result2);
			var str = JSON.stringify(result2);
			var v2 = JSON.parse(str);
	
			console.log(v2.IpfsHash);
			let metadata_uri = "https://gateway.pinata.cloud/ipfs/" + v2.IpfsHash;

			console.log(metadata_uri);
			let register_metadata_uri = metadata_uri + '\n';
			fs.appendFile(metadata_info_file, register_metadata_uri, function (err) {
				if (err) throw err;
				//console.log('Saved!');
			  });
		}).catch((err)=>{
			console.log(err);
		});
	}).catch((err)=>{console.log(err)})
}

function StorageLoop(folder, info_folder,files, collection_description, metadata_info_file, images_info_file) {
	for (let i = 0; i < files.length; i++){
		console.log(files[i]);
		Pin_img_and_associate_metadata(folder, info_folder, files[i], collection_description, metadata_info_file, images_info_file);
	}
}

StorageLoop(FOLDER, INFO_FOLDER, FILES, COLLECTION_DESCRIPTION, INFO_FILE_METADATA, INFO_FILE_IMAGES);

