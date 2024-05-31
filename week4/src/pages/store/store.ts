import {configureStore} from '@reduxjs/toolkit'
import { fetchAllPokemonApi } from '../services/fetchAllPokemons'
import { setupListeners } from '@reduxjs/toolkit/query'
import pokemonReducer from './pokemonSlice'

export const store = configureStore({
    reducer : {
        [fetchAllPokemonApi.reducerPath] : fetchAllPokemonApi.reducer,
        pokemons: pokemonReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(fetchAllPokemonApi.middleware),    
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;