import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchAllPokemonApi } from '../services/fetchAllPokemons';
import { Pokemon } from '../schema/pokemonSchema'; // Adjust the path to your types

interface PokemonState {
  allPokemons: Pokemon[];
}

const initialState: PokemonState = {
  allPokemons: [],
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setAllPokemons(state, action: PayloadAction<Pokemon[]>) {
      state.allPokemons = action.payload;
    },
    updateAllPokemons(state, action: PayloadAction<Pokemon[]>) {
      state.allPokemons = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      fetchAllPokemonApi.endpoints.fetchAllPokemons.matchFulfilled,
      (state, { payload }: { payload: Pokemon[] }) => {
        state.allPokemons = payload;
      }
    );
  },
});

export const { setAllPokemons, updateAllPokemons } = pokemonSlice.actions;
export default pokemonSlice.reducer;
