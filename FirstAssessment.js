const NFTs = [];
function mintNFT (_name,_color,_shape) {
    const NFT ={
        "name" : _name,
        "color" : _color,
        "shape" : _shape
    }
    NFTs.push(NFT);
    console.log("Minted " + _name);
}
function listNFTs () {
    for(let i = 0; i<NFTs.length; i++){
        console.log("\nID:\t\t" + (i+1));
        console.log("\nName: \t" + NFTs[i].name);
        console.log("Color: \t" + NFTs[i].color);
        console.log("Shape: \t" + NFTs[i].shape);
    }
}

function getTotalSupply() {
    console.log("\n" + NFTs.length);
}
mintNFT("Devs", "Golden", "Heart");
mintNFT("Neva", "Pink", "Circle");
mintNFT("Mado", "Yellow", "Square");
mintNFT("killes", "Green", "Triangle");
listNFTs();
getTotalSupply();
