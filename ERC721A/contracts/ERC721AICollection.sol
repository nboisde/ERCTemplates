// SPDX-License-Identifier: MIT
// Creator: Chiru Labs
pragma solidity ^0.8.4;

import "./ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ERC721AICollection is ERC721A, Ownable {
	constructor() ERC721A("ERC721AICollection", "ERC721AI"){

	}

	function mint(
		address to,
        uint256 quantity,
    	bytes memory _data,
        bool safe
	)external payable {
	//	bytes memory _data = bytes(uri);
		_mint(to, quantity, _data, safe);
	}

	function safeMint(
		address to,
        uint256 quantity,
        bytes memory _data
	) external payable {
	//	bytes memory _data = bytes(uri);
		_safeMint(to, quantity, _data);
	}
}