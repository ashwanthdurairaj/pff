import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const fetchPokemonDetailsApi = createApi({
    reducerPath: 'fetchPokemonDetailsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/'}),
    endpoints: (builder) => ({
        getPokemonDetailsByUrl: builder.query({
            query: (url) => ({
                url,
                method: 'GET',
            }),
        }),
    }),
})

export const { useGetPokemonDetailsByUrlQuery } = fetchPokemonDetailsApi;