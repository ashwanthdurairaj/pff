import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Pokemon } from '../schema/pokemonSchema'
import {PokemonType} from '../schema/pokemonTypesSchema'

export const fetchAllPokemonApi = createApi({
  reducerPath: 'fetchAllPokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    fetchAllPokemons: builder.query<Pokemon[], void>({
      queryFn: async () => {
        const uniquePokemons = new Set<Pokemon>();

        try {
          const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
          const responseInJson = await response.json();

          for (const pokemon of responseInJson.results) {
            const pokemonDetails = await fetch(pokemon.url);
            const pokemonDetailsInJson = await pokemonDetails.json();
            const pokeObject = {
              name: pokemonDetailsInJson.name,
              id: pokemonDetailsInJson.id,
              type: pokemonDetailsInJson.types.map((type: PokemonType) => type.type.name),
              image: pokemonDetailsInJson.sprites.front_default,
            };
            uniquePokemons.add(pokeObject);

            if (uniquePokemons.size === 151) {
              break;
            }
          }

          const pokemonList = Array.from(uniquePokemons);
          return { data: pokemonList };
        } catch (err) {
          return { error: { status: 'CUSTOM_ERROR', error: String(err) } };
        }
      },
    }),
  }),
})

export const { useFetchAllPokemonsQuery } = fetchAllPokemonApi