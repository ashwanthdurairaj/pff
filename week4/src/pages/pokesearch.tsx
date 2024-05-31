import React, {ChangeEvent, FormEvent, useState} from 'react'
import Search from './components/search'
import DisplayTable from './components/displaytable'
import {useFetchAllPokemonsQuery} from './services/fetchAllPokemons'
import { filterPokemon } from './store/pokemonSlice'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';

function PokeSearch()
{

    const [search, setSearch] = useState("")

    const dispatch = useDispatch();

    let { data , error, isLoading : loading } =  useFetchAllPokemonsQuery()

    const displayPokemons = useSelector((state : RootState) => state.pokemons.displayPokemons);
        
    const onChange = (event : ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }
    
    const submit = async(event : FormEvent<HTMLFormElement>) => {
        
        event.preventDefault()
        dispatch(filterPokemon(search));
    }

    return (
        <div className="centered-container">
        <Search search = {search} change = {onChange} submit = {submit}/>
        <DisplayTable list = {displayPokemons} loading = {loading}/>
        </div>
    )
}

export default PokeSearch