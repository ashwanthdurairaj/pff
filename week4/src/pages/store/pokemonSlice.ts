import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchAllPokemonApi } from '../services/fetchAllPokemons'
import { Pokemon } from '../schema/pokemonSchema' // Adjust the path to your types

interface PokemonState {
  allPokemons: Pokemon[]
  displayPokemons: Pokemon[]
}

const initialState: PokemonState = {
  allPokemons: [],
  displayPokemons: [],
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
      console.log(searchTerm)
      console.log(pokemonType)
      if (pokemonType == 'All') {
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
      // state.displayPokemons = state.allPokemons.filter((pokemon : Pokemon) => {
      //   if(type == 'All')
      //   {

      //     return pokemon.name.includes(searchTerm.toLowerCase())
      //   }
      //   else
      //   {
      //     return (pokemon.name.includes(searchTerm.toLowerCase()) && pokemon.type.some(poketype => poketype == type))
      //   }
      // })
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
