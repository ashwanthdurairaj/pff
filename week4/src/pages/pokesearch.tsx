import React, { ChangeEvent, FormEvent, useState } from 'react'
import Search from './components/search'
import DisplayTable from './components/displaytable'
import { useFetchAllPokemonsQuery } from './services/fetchAllPokemons'
import { filterPokemon } from './store/pokemonSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store/store'

function PokeSearch() {
  const [search, setSearch] = useState('')

  const [pokemonType, setPokemonType] = useState('')

  const dispatch = useDispatch()

  let { data, error, isLoading: loading } = useFetchAllPokemonsQuery()

  const displayPokemons = useSelector(
    (state: RootState) => state.pokemons.displayPokemons,
  )

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPokemonType(event.target.value)
    const type = event.target.value
    dispatch(
      filterPokemon({
        searchTerm: search || '',
        pokemonType: type || 'All'
      })
    )
  }

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(pokemonType)
    dispatch(
      filterPokemon({
        searchTerm: search || '',
        pokemonType: pokemonType || 'All'
      }),
    )
  }

  if (loading) {
    return (
      <div className="centered-container">
        <div className="spinner"></div>
      </div>
    )
  }
  return (
    <div className="centered-container">
      <Search
        search={search}
        type={pokemonType}
        change={onChange}
        submit={submit}
        selectChange={onSelectChange}
      />
      <DisplayTable list={displayPokemons} />
    </div>
  )
}

export default PokeSearch
