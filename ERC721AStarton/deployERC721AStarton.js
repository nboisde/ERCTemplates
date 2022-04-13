const axios = require("axios");
const dot = require("dotenv");
const fs = require("fs");

dot.config();
const api_key = process.env.STARTON_API_KEY;

const http = axios.create({
    baseURL: "https://api.starton.io/v2",
    headers: {
        "x-api-key": api_key,
    },
})

http.post('/smart-contract/from-bytecode', {
  "network": "polygon-mumbai",
  "name": "ERC721AICollection",
  "description": "TEST ERC721A",
  "signerWallet": "0xf714b98f275A719df14FB618f8C16B1aC4338032",
  "params": [],
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "ApprovalCallerNotOwnerNorApproved",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ApprovalQueryForNonexistentToken",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ApprovalToCurrentOwner",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ApproveToCaller",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "BalanceQueryForZeroAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OwnerQueryForNonexistentToken",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferCallerNotOwnerNorApproved",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferFromIncorrectOwner",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferToNonERC721ReceiverImplementer",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferToZeroAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "URIQueryForNonexistentToken",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040523480156200001157600080fd5b506040518060400160405280601281526020017122a9219b9918a0a4a1b7b63632b1ba34b7b760711b81525060405180604001604052806008815260200167455243373231414960c01b8152506200007862000072620000b160201b60201c565b620000b5565b81516200008d90600390602085019062000105565b508051620000a390600490602084019062000105565b5050600060015550620001e8565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8280546200011390620001ab565b90600052602060002090601f01602090048101928262000137576000855562000182565b82601f106200015257805160ff191683800117855562000182565b8280016001018555821562000182579182015b828111156200018257825182559160200191906001019062000165565b506200019092915062000194565b5090565b5b8082111562000190576000815560010162000195565b600181811c90821680620001c057607f821691505b60208210811415620001e257634e487b7160e01b600052602260045260246000fd5b50919050565b6111c580620001f86000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806370a08231116100a2578063a22cb46511610071578063a22cb46514610210578063b88d4fde14610223578063c87b56dd14610236578063e985e9c514610249578063f2fde38b1461028557600080fd5b806370a08231146101dc578063715018a6146101ef5780638da5cb5b146101f757806395d89b411461020857600080fd5b806318160ddd116100de57806318160ddd1461018d57806323b872dd146101a357806342842e0e146101b65780636352211e146101c957600080fd5b806301ffc9a71461011057806306fdde0314610138578063081812fc1461014d578063095ea7b314610178575b600080fd5b61012361011e366004610f63565b610298565b60405190151581526020015b60405180910390f35b6101406102ea565b60405161012f919061104b565b61016061015b366004610f9b565b61037c565b6040516001600160a01b03909116815260200161012f565b61018b610186366004610f3a565b6103c0565b005b600254600154035b60405190815260200161012f565b61018b6101b1366004610df0565b61044e565b61018b6101c4366004610df0565b610459565b6101606101d7366004610f9b565b610474565b6101956101ea366004610da4565b610486565b61018b6104d5565b6000546001600160a01b0316610160565b610140610540565b61018b61021e366004610f00565b61054f565b61018b610231366004610e2b565b6105e5565b610140610244366004610f9b565b610636565b610123610257366004610dbe565b6001600160a01b03918216600090815260086020908152604080832093909416825291909152205460ff1690565b61018b610293366004610da4565b6106c8565b60006001600160e01b031982166380ac58cd60e01b14806102c957506001600160e01b03198216635b5e139f60e01b145b806102e457506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600380546102f9906110cd565b80601f0160208091040260200160405190810160405280929190818152602001828054610325906110cd565b80156103725780601f1061034757610100808354040283529160200191610372565b820191906000526020600020905b81548152906001019060200180831161035557829003601f168201915b5050505050905090565b600061038782610793565b6103a4576040516333d1c03960e21b815260040160405180910390fd5b506000908152600760205260409020546001600160a01b031690565b60006103cb82610474565b9050806001600160a01b0316836001600160a01b031614156104005760405163250fdee360e21b815260040160405180910390fd5b336001600160a01b03821614801590610420575061041e8133610257565b155b1561043e576040516367d9dca160e11b815260040160405180910390fd5b6104498383836107bf565b505050565b61044983838361081b565b610449838383604051806020016040528060008152506105e5565b600061047f82610a0a565b5192915050565b60006001600160a01b0382166104af576040516323d3ad8160e21b815260040160405180910390fd5b506001600160a01b031660009081526006602052604090205467ffffffffffffffff1690565b6000546001600160a01b031633146105345760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b61053e6000610b26565b565b6060600480546102f9906110cd565b6001600160a01b0382163314156105795760405163b06307db60e01b815260040160405180910390fd5b3360008181526008602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6105f084848461081b565b6001600160a01b0383163b15158015610612575061061084848484610b76565b155b15610630576040516368d2bf6b60e11b815260040160405180910390fd5b50505050565b606061064182610793565b61065e57604051630a14c4b560e41b815260040160405180910390fd5b600061067560408051602081019091526000815290565b905080516000141561069657604051806020016040528060008152506106c1565b806106a084610c6e565b6040516020016106b1929190610fdf565b6040516020818303038152906040525b9392505050565b6000546001600160a01b031633146107225760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161052b565b6001600160a01b0381166107875760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161052b565b61079081610b26565b50565b6000600154821080156102e4575050600090815260056020526040902054600160e01b900460ff161590565b60008281526007602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b600061082682610a0a565b9050836001600160a01b031681600001516001600160a01b03161461085d5760405162a1148160e81b815260040160405180910390fd5b6000336001600160a01b038616148061087b575061087b8533610257565b8061089657503361088b8461037c565b6001600160a01b0316145b9050806108b657604051632ce44b5f60e11b815260040160405180910390fd5b6001600160a01b0384166108dd57604051633a954ecd60e21b815260040160405180910390fd5b6108e9600084876107bf565b6001600160a01b038581166000908152600660209081526040808320805467ffffffffffffffff1980821667ffffffffffffffff92831660001901831617909255898616808652838620805493841693831660019081018416949094179055898652600590945282852080546001600160e01b031916909417600160a01b429092169190910217835587018084529220805491939091166109bf5760015482146109bf578054602086015167ffffffffffffffff16600160a01b026001600160e01b03199091166001600160a01b038a16171781555b50505082846001600160a01b0316866001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050505050565b604080516060810182526000808252602082018190529181019190915281600154811015610b0d57600081815260056020908152604091829020825160608101845290546001600160a01b0381168252600160a01b810467ffffffffffffffff1692820192909252600160e01b90910460ff16151591810182905290610b0b5780516001600160a01b031615610aa1579392505050565b5060001901600081815260056020908152604091829020825160608101845290546001600160a01b038116808352600160a01b820467ffffffffffffffff1693830193909352600160e01b900460ff1615159281019290925215610b06579392505050565b610aa1565b505b604051636f96cda160e11b815260040160405180910390fd5b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b604051630a85bd0160e11b81526000906001600160a01b0385169063150b7a0290610bab90339089908890889060040161100e565b602060405180830381600087803b158015610bc557600080fd5b505af1925050508015610bf5575060408051601f3d908101601f19168201909252610bf291810190610f7f565b60015b610c50573d808015610c23576040519150601f19603f3d011682016040523d82523d6000602084013e610c28565b606091505b508051610c48576040516368d2bf6b60e11b815260040160405180910390fd5b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490505b949350505050565b606081610c925750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610cbc5780610ca681611108565b9150610cb59050600a83611076565b9150610c96565b60008167ffffffffffffffff811115610ce557634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610d0f576020820181803683370190505b5090505b8415610c6657610d2460018361108a565b9150610d31600a86611123565b610d3c90603061105e565b60f81b818381518110610d5f57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350610d81600a86611076565b9450610d13565b80356001600160a01b0381168114610d9f57600080fd5b919050565b600060208284031215610db5578081fd5b6106c182610d88565b60008060408385031215610dd0578081fd5b610dd983610d88565b9150610de760208401610d88565b90509250929050565b600080600060608486031215610e04578081fd5b610e0d84610d88565b9250610e1b60208501610d88565b9150604084013590509250925092565b60008060008060808587031215610e40578081fd5b610e4985610d88565b9350610e5760208601610d88565b925060408501359150606085013567ffffffffffffffff80821115610e7a578283fd5b818701915087601f830112610e8d578283fd5b813581811115610e9f57610e9f611163565b604051601f8201601f19908116603f01168101908382118183101715610ec757610ec7611163565b816040528281528a6020848701011115610edf578586fd5b82602086016020830137918201602001949094529598949750929550505050565b60008060408385031215610f12578182fd5b610f1b83610d88565b915060208301358015158114610f2f578182fd5b809150509250929050565b60008060408385031215610f4c578182fd5b610f5583610d88565b946020939093013593505050565b600060208284031215610f74578081fd5b81356106c181611179565b600060208284031215610f90578081fd5b81516106c181611179565b600060208284031215610fac578081fd5b5035919050565b60008151808452610fcb8160208601602086016110a1565b601f01601f19169290920160200192915050565b60008351610ff18184602088016110a1565b8351908301906110058183602088016110a1565b01949350505050565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061104190830184610fb3565b9695505050505050565b6020815260006106c16020830184610fb3565b6000821982111561107157611071611137565b500190565b6000826110855761108561114d565b500490565b60008282101561109c5761109c611137565b500390565b60005b838110156110bc5781810151838201526020016110a4565b838111156106305750506000910152565b600181811c908216806110e157607f821691505b6020821081141561110257634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561111c5761111c611137565b5060010190565b6000826111325761113261114d565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b03198116811461079057600080fdfea2646970667358221220481a87f07c0e05e81aac5daa6ae29875d51424c539c733b9f736bdaa238dce1f64736f6c63430008040033",
  "compilerVersion": "string",
  "signerWallet": "string"
}).then(response => {
    console.log(response.data)
})
