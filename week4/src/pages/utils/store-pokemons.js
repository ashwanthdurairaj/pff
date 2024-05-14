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

async function lmao(search)
{
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
  const responseInJson = await response.json();
  let final = []
  const searchResult = responseInJson.results.filter((pokemon) => {
    return pokemon.name.includes(search)
  }).map(async(pokemon) => {
    try{
      let response = await fetch(pokemon.url)
      if(!response.ok)
      {
        throw new Error('Error fetching data')
      }
      let responseInJson = await response.json()
        let pokeObject = {
        name: responseInJson.name,
        id: responseInJson.id,
        type: responseInJson.types.map((type) => type.type.name),
        image: responseInJson.sprites.front_default,
      }
      final.push(pokeObject)
    }
    catch(err)
    {
      console.error('Error fetching data for:', pokemon.name, err);
      }
    })

  await Promise.all(searchResult)
  console.log(final);
}

lmao("cha")