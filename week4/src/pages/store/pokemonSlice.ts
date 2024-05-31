import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAllPokemonApi } from '../services/fetchAllPokemons';
import { Pokemon } from '../schema/pokemonSchema'; // Adjust the path to your types

interface PokemonState {
  allPokemons: Pokemon[];
  displayPokemons: Pokemon[];
}

const initialState: PokemonState = {
  allPokemons: [],
  displayPokemons: []
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    filterPokemon(state, action: PayloadAction<string>){
      state.displayPokemons = state.allPokemons.filter((pokemon : Pokemon) => {
        return pokemon.name.includes(action.payload.toLowerCase())
      })
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      fetchAllPokemonApi.endpoints.fetchAllPokemons.matchFulfilled,
      (state, { payload }: { payload: Pokemon[] }) => {
        state.allPokemons = payload;
        state.displayPokemons = payload;
      }
    );
  },
});

export const { filterPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
