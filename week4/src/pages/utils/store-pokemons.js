const fs = require('fs')

function reducer(accumulator, currentValue)
{
    accumulator[currentValue.name] = currentValue
    return accumulator
}

const storePokemon = async() => {
    const response  = await 
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151").then(data => data.json())
    .then(function(res) {
        return res.results
    })
    const jsonObject = response.reduce(reducer, {})
    const jsonData = JSON.stringify(jsonObject, null, 2)
    fs.writeFile('pokemon.json', jsonData, 'utf8', (err) => {
        if (err) {
          console.error('Error writing to file:', err);
        } else {
          console.log('Data written to pokemon.json');
        }
    });
} 

const accessPokemon = async(pokemon) => {

  fs.readFile('pokemon.json', 'utf-8', async (err, jsonString) => {

    if(err)
    {
      console.log("Error opening file: ", err)
    }

    const data = JSON.parse(jsonString)
    const pokemonList = []
    Object.keys(data).forEach((key) => {
      if(key.includes(pokemon))
        {
          pokemonList.push(data[key].url)
        }
    })

  // Array to store fetched Pokemon features
  let listOfPokemonFeatures = [];

  // Array to store fetch promises
  let fetchPromises = pokemonList.map(async (link) => {
    let data = await fetch(link);
    let pokemon = await data.json();
    let pokeObject = {
      name: pokemon.name,
      id: pokemon.id,
      type: pokemon.types.map((type) => type.type.name),
      image: pokemon.sprites.front_default
    };
    listOfPokemonFeatures.push(pokeObject);
  });

  // Wait for all fetch promises to resolve
  await Promise.all(fetchPromises);

  // Now, all data should be fetched
  console.log(listOfPokemonFeatures);


  })
}

accessPokemon('cha')