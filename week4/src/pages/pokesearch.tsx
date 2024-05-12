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
    
    const submit = async(event : FormEvent<HTMLFormElement>) => {
        
        event.preventDefault()

        const dataToSend = {pokemon : search}

        const queryParams = new URLSearchParams(dataToSend);

        const url = `/api/hello?${queryParams}`;

        const response = await fetch(url);

        const lmao = await response.json()
        console.log(lmao)
        setPokemonList(lmao.list)
    }


    return (
        <div className="centered-container">
        <Search search = {search} change = {onChange} submit = {submit}/>
        <DisplayTable list = {pokemonList}/>
        </div>
    )
}

export default PokeSearch