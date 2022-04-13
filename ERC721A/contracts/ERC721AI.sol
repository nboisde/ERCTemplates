// SPDX-License-Identifier: MIT
// Creator: nboisde
// Derived from: Chiru Labs
pragma solidity ^0.8.4;

import "./ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ERC721AI is ERC721A, Ownable {
	using Counters for Counters.Counter;
	using Strings for uint256;
	Counters.Counter private _tokenIds;

	mapping (uint256 => string) private _tokenURIs;
	constructor() ERC721A("ERC721AI", "AI"){}

	function _setTokenURI(uint256 tokenId, string memory _tokenURI)
	internal
	virtual
	{
		_tokenURIs[tokenId] = _tokenURI;
	}

	function tokenURI(uint256 tokenId)
		public
		view
		virtual
		override
		returns (string memory)
		{
			require(_exists(tokenId), "URI query for non existant token");
			string memory _tokenURI = _tokenURIs[tokenId];
			return _tokenURI;
		}

	function safeMint(address to, uint256 quantity, string[] memory _uris)
	external onlyOwner
	{
	// 	   _tokenIds.increment();
    // uint256 newItemId = _tokenIds.current();
    // _mint(recipient, newItemId);
    // _setTokenURI(newItemId, uri);
    // return newItemId;
		for (uint256 i = 0; i < quantity; i++)
		{
			//_tokenIds.increment();
			uint256 newItemId = _tokenIds.current();
			_tokenIds.increment();
			_setTokenURI(newItemId, _uris[i]);
		}
		_safeMint(to, quantity, '');
	}
}