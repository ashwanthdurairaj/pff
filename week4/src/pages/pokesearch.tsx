import React, {ChangeEvent, FormEvent, useState, useCallback} from 'react'
import Search from './components/search'
import DisplayTable from './components/displaytable'
import fs from 'fs'

function PokeSearch()
{

    const [search, setSearch] = useState("")

    const [pokemonList, setPokemonList] = useState<Record<string, any>[]>([])
    
    
    const onChange = (event : ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }
    
    const submit = (event : FormEvent<HTMLFormElement>) => {
        
        event.preventDefault()
        
        fs.readFile('pokemon.json', 'utf-8', async(err, jsonString) => {

            if(err)
            {
              console.log("Error opening file: ", err)
            }
        
            const data = JSON.parse(jsonString)
            const listOfPokemons : string[] = []

            Object.keys(data).forEach((key) => {
              if(key.includes(search))
                {
                  console.log(key)
                  listOfPokemons.push(data[key].url)
                }
            })

            // Array to store fetched Pokemon features
            let listOfPokemonFeatures : Record<string, any>[] = [];

            // Array to store fetch promises
            let fetchPromises = listOfPokemons.map(async (link) => {
            let data = await fetch(link);
            let pokemon = await data.json();
            let pokeObject : Record<string, any> = {
                name: pokemon.name,
                id: pokemon.id,
                type: pokemon.types.map((type : Record<string, any>) => type.type.name),
                image: pokemon.sprites.front_default
            };
            listOfPokemonFeatures.push(pokeObject);
            });

    // Wait for all fetch promises to resolve
        await Promise.all(fetchPromises);

    // Now, all data should be fetched
        setPokemonList(listOfPokemonFeatures)
    })
    }


    return (
        <div className="centered-container">
        <Search search = {search} change = {onChange} submit = {submit}/>
        <DisplayTable list = {pokemonList}/>
        </div>
    )
}

export default PokeSearch