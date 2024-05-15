import React, {ChangeEvent, FormEvent, useState, useEffect} from 'react'
import Search from './components/search'
import DisplayTable from './components/displaytable'

function PokeSearch()
{

    const [search, setSearch] = useState("")

    const [loading, setLoading] = useState(true)

    const [pokemonList, setPokemonList] = useState<Record<string, any>[]>([])

    let final: Record<string, any>[] = []

    useEffect(() => {
        const fetchAllPokemons = async() => {
        try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        const responseInJson = await response.json();
        const allPokemons = responseInJson.results.map(async(pokemon: Record<string, string>) => {
            const response = await fetch(pokemon.url)
            const responseInJson = await response.json()
            let pokeObject = {
                name: responseInJson.name,
                id: responseInJson.id,
                type: responseInJson.types.map((type: Record<string, any>) => type.type.name),
                image: responseInJson.sprites.front_default,
              }
              final.push(pokeObject)
        })
        await Promise.all(allPokemons)
        setPokemonList(final)
        }
        catch(err)
        {
            console.error("Error fetching data: ", err)
        }
        finally{
            setLoading(false);
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

        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        const responseInJson = await response.json();

        const searchResult = responseInJson.results.filter((pokemon : Record<string, any>) => {
          return pokemon.name.includes(search.toLowerCase())
        }).map(async(pokemon : Record<string, string>) => {
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
              type: responseInJson.types.map((type: Record<string, any>) => type.type.name),
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
        setPokemonList(final)
        setLoading(false)
    }


    return (
        <div className="centered-container">
        <Search search = {search} change = {onChange} submit = {submit}/>
        <DisplayTable list = {pokemonList} loading = {loading}/>
        </div>
    )
}

export default PokeSearch