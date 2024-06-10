import { configureStore } from '@reduxjs/toolkit'
import { fetchAllPokemonApi } from '../services/fetchAllPokemons'
import { fetchPokemonDetailsApi } from '../services/fetchPokemonDetails'
import { setupListeners } from '@reduxjs/toolkit/query'
import pokemonReducer from './pokemonSlice'

export const store = configureStore({
  reducer: {
    [fetchAllPokemonApi.reducerPath]: fetchAllPokemonApi.reducer,
    [fetchPokemonDetailsApi.reducerPath]: fetchPokemonDetailsApi.reducer,
    pokemons: pokemonReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetchAllPokemonApi.middleware,
      fetchPokemonDetailsApi.middleware
    ),
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
