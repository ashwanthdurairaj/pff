import React, {ChangeEvent, FormEvent, useState, useCallback} from 'react'
import Search from './components/search'
import DisplayTable from './components/displaytable'
import fs from 'fs'

function PokeSearch()
{

    const [search, setSearch] = useState("")

    const [loading, setLoading] = useState(false)

    const [pokemonList, setPokemonList] = useState<Record<string, any>[]>([])
    
    
    const onChange = (event : ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }
    
    const submit = async(event : FormEvent<HTMLFormElement>) => {
        
        event.preventDefault()

        const dataToSend = {pokemon : search}

        const queryParams = new URLSearchParams(dataToSend);

        const url = `/api/hello?${queryParams}`;

        setLoading(true)

        const response = await fetch(url);

        const responseInJson = await response.json()

        setPokemonList(responseInJson.list)

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