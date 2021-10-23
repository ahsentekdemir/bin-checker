function getBin(){
    var bin = "";
    var uri = 'https://lookup.binlist.net/'+ bin;

    fetch(uri).then(function(response){
        let data = response.json();
        return data;
        
        const {scheme, type, bank, brand, country} = data;

    }).then(function(data){
        name = data.scheme;
        brand = data.brand;
        bank = data.bank;
        type = data.type;
        country = data.country.alpha2;
    }).then(function(){showBin()});

function showBin(){
    console.log("name: ${name}\n brand: ${brand}\n bank: ${bank}\n type: ${type}\n country: ${country}");
    }   
}