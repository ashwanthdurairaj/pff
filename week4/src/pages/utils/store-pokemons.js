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

storePokemon()