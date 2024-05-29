import React, {ChangeEvent, FormEvent, useState, useEffect, useRef} from 'react'
import Search from './components/search'
import DisplayTable from './components/displaytable'
import {Pokemon} from './schema/pokemonSchema'
import {PokemonType} from './schema/pokemonTypesSchema'

function PokeSearch()
{

    const [search, setSearch] = useState("")

    const [loading, setLoading] = useState(true)

    const pokemonList = useRef<Pokemon[]>([]);

    const [displayList, setDisplayList] = useState<Pokemon[]>([])


    useEffect(() => {
        const uniquePokemons = new Set<Pokemon>();

        const fetchAllPokemons = async() => {
        try{
          const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
          const responseInJson = await response.json()
          for(const pokemon of responseInJson.results)
          {
            const pokemonDetails = await fetch(pokemon.url)
            const pokemonDetailsInJson = await pokemonDetails.json()
            const pokeObject = {
              name: pokemonDetailsInJson.name,
              id: pokemonDetailsInJson.id,
              type: pokemonDetailsInJson.types.map((type: PokemonType) => (
                type.type.name
              )),
              image: pokemonDetailsInJson.sprites.front_default
            }
            uniquePokemons.add(pokeObject) 

            if(uniquePokemons.size == 151)
            {                    
              break
            }
          }
          pokemonList.current = Array.from(uniquePokemons)
          setDisplayList(pokemonList.current)
        }
        catch(err){
          console.log("Error: " + err)
        }
        finally{
          setLoading(false)
        }
    }
    fetchAllPokemons()
}, [])
        
    const onChange = (event : ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }
    
    const submit = async(event : FormEvent<HTMLFormElement>) => {
        
        event.preventDefault()
        setLoading(true)
        const displayPokemons = pokemonList.current.filter((pokemon : Pokemon) => {
          return pokemon.name.includes(search.toLowerCase())
        })
        setDisplayList(displayPokemons)
        setLoading(false)
    }


    return (
        <div className="centered-container">
        <Search search = {search} change = {onChange} submit = {submit}/>
        <DisplayTable list = {displayList} loading = {loading}/>
        </div>
    )
}

export default PokeSearch