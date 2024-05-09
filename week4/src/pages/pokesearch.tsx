import React, {ChangeEvent, FormEvent, useState} from 'react'
import Search from './components/search'
import DisplayTable from './components/displaytable'

function PokeSearch()
{

    const [display, setDisplay] = useState({
        name : "",
        id: "",
        type: [],
        picture: "",
    })

    const [search, setSearch] = useState("")

    const onChange = (event : ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    const submit = (event : FormEvent<HTMLFormElement>) => {
        
        event.preventDefault()
        fetch(`https://pokeapi.co/api/v2/pokemon/${search}`).then(data => data.json()
        )
        .then(function(pokemon : Record<string, any>){
            setDisplay(prevState => ({
                ...prevState,
                name: pokemon.name,
                id: pokemon.id,
                picture: pokemon.sprites.front_default,
                type: pokemon.types.map((pokemon : Record<string, any>) => (pokemon.type.name))
              }))     
        })
    }


    return (
        <>
        <Search search = {search} change = {onChange} submit = {submit}/>
        <DisplayTable display = {display}/>
        </>
    )
}

export default PokeSearch