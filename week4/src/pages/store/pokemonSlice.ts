import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchAllPokemonApi } from '../services/fetchAllPokemons'
import { Pokemon } from '../schema/pokemonSchema' // Adjust the path to your types

interface PokemonState {
  allPokemons: Pokemon[]
  displayPokemons: Pokemon[]
  searchTerm: string
}

const initialState: PokemonState = {
  allPokemons: [],
  displayPokemons: [],
  searchTerm: ''
}

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    filterPokemon(
      state,
      action: PayloadAction<{ searchTerm: string; pokemonType: string }>,
    ) {
      const { searchTerm, pokemonType } = action.payload

      if (pokemonType == 'all') {
        state.displayPokemons = state.allPokemons.filter((pokemon: Pokemon) => {
          return pokemon.name.includes(searchTerm.toLowerCase())
        })
      } else {
        state.displayPokemons = state.allPokemons.filter((pokemon: Pokemon) => {
          return (
            pokemon.name.includes(searchTerm.toLowerCase()) &&
            pokemon.type.some((pokeType) => pokeType == pokemonType)
          )
        })
      }
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      fetchAllPokemonApi.endpoints.fetchAllPokemons.matchFulfilled,
      (state, { payload }: { payload: Pokemon[] }) => {
        state.allPokemons = payload
        state.displayPokemons = payload
      },
    )
  },
})

export const { filterPokemon } = pokemonSlice.actions
export default pokemonSlice.reducer
