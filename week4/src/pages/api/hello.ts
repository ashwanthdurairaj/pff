// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {promises as fs} from 'fs';

type Data = {
  list: Record<string, any>[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {

    const { search } = req.query;
    let listOfPokemonFeatures : Record<string, any>[] = []

    const jsonString = await fs.readFile(process.cwd() + '/src/pages/api/pokemon.json', 'utf-8');

    const data = JSON.parse(jsonString)
    let fetchPromises: Promise<void>[] = [];

    // Iterate over each key in the data object
    Object.keys(data).forEach((key) => {
      // Check if the search string is a substring of the key
      if (typeof search === 'string' && key.includes(search)) {
        // Push the fetch promise to the array
        fetchPromises.push(
          new Promise(async (resolve, reject) => {
            try {
              // Fetch the data from the URL
              let response = await fetch(data[key].url);
              if (!response.ok) {
                throw new Error('Failed to fetch data');
              }
              let pokemon = await response.json();
              let pokeObject = {
                name: pokemon.name,
                id: pokemon.id,
                type: pokemon.types.map((type: Record<string, any>) => type.type.name),
                image: pokemon.sprites.front_default
              };
              listOfPokemonFeatures.push(pokeObject);
              // console.log(listOfPokemonFeatures);
              resolve(); // Resolve the promise
            } catch (error) {
              reject(error); // Reject the promise if an error occurs
            }
          })
        );
      }
    });
  await Promise.all(fetchPromises)
  console.log(listOfPokemonFeatures)
  res.status(200).json({list: listOfPokemonFeatures})

}
