import React, {ChangeEvent, FormEvent, useState, useEffect, useRef} from 'react'
import Search from './components/search'
import DisplayTable from './components/displaytable'
import {Pokemon} from './schema/pokemonSchema'
import {useFetchAllPokemonsQuery} from './services/fetchAllPokemons'
import { setAllPokemons, updateAllPokemons } from './store/pokemonSlice'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';

function PokeSearch()
{

    const [search, setSearch] = useState("")

    // const [loading, setLoading] = useState(true)

    // const [displayList, setDisplayList] = useState<Pokemon[]>([])

    const pokemonList = useRef<Pokemon[]>([]);

    const dispatch = useDispatch();

    let { data : displayList, error, isLoading : loading } =  useFetchAllPokemonsQuery()

    // pokemonList.current = displayList ?? []
    const allPokemons = useSelector((state : RootState) => state.pokemons.allPokemons);
    // setLoading(false)

    pokemonList.current = displayList ?? []

    dispatch(setAllPokemons(displayList ?? []))
//     useEffect(() => {
//         const { data , error, isLoading } = useFetchAllPokemonsQuery()
//         if(data)
//         {
//             setDisplayList(data)
//         }
//         else
//         {
//             setDisplayList([]);
//         }
//         setLoading(false)
//     //     const uniquePokemons = new Set<Pokemon>();

//     //     const fetchAllPokemons = async() => {
//     //     try{
//     //       const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
//     //       const responseInJson = await response.json()
//     //       for(const pokemon of responseInJson.results)
//     //       {
//     //         const pokemonDetails = await fetch(pokemon.url)
//     //         const pokemonDetailsInJson = await pokemonDetails.json()
//     //         const pokeObject = {
//     //           name: pokemonDetailsInJson.name,
//     //           id: pokemonDetailsInJson.id,
//     //           type: pokemonDetailsInJson.types.map((type: PokemonType) => (
//     //             type.type.name
//     //           )),
//     //           image: pokemonDetailsInJson.sprites.front_default
//     //         }
//     //         uniquePokemons.add(pokeObject) 

//     //         if(uniquePokemons.size == 151)
//     //         {                    
//     //           break
//     //         }
//     //       }
//     //       pokemonList.current = Array.from(uniquePokemons)
//     //       setDisplayList(pokemonList.current)
//     //     }
//     //     catch(err){
//     //       console.log("Error: " + err)
//     //     }
//     //     finally{
//     //       setLoading(false)
//     //     }
//     // }
//     // fetchAllPokemons()

// }, [])
        
    const onChange = (event : ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }
    
    const submit = async(event : FormEvent<HTMLFormElement>) => {
        
        event.preventDefault()
        console.log("Search: " + search)
        const displayPokemons = pokemonList.current.filter((pokemon : Pokemon) => {
          return pokemon.name.includes(search.toLowerCase())
        })
        dispatch(updateAllPokemons(displayPokemons));
    }


    return (
        <div className="centered-container">
        <Search search = {search} change = {onChange} submit = {submit}/>
        <DisplayTable list = {allPokemons} loading = {loading}/>
        </div>
    )
}

export default PokeSearch