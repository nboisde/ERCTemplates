pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ERC721ex is ERC721, Ownable {
  using Counters for Counters.Counter;
  using Strings for uint256;
  Counters.Counter private _tokenIds;
  mapping (uint256 => string) private _tokenURIs;

  constructor() ERC721("ERC721ex", "721EX") {}
  
  function contractURI() public view returns (string memory) {
    return "https://gateway.pinata.cloud/ipfs/QmYX4HFjyMnSU8DVdSgDVTVL2KLaTCvh4qSrs2uCppXtda";
  }

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
    require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
    string memory _tokenURI = _tokenURIs[tokenId];
    return _tokenURI;
  }
  function mint(address recipient, string memory uri)
    external onlyOwner
    returns (uint256)/// @notice Explain to an end user what this does
	/// @dev Explain to a developer any extra details
	/// @return Documents the return variables of a contract’s function state variable
	/// @inheritdoc	Copies all missing tags from the base function (must be followed by the contract name)
  {
    //_tokenIds.increment();
    uint256 newItemId = _tokenIds.current();
    _tokenIds.increment();
	_mint(recipient, newItemId);
    _setTokenURI(newItemId, uri);
    return newItemId;
  }
}
