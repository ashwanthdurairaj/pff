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

    const { pokemon } = req.query;
    let listOfPokemonFeatures : Record<string, any>[] = []

    const jsonString = await fs.readFile(process.cwd() + '/src/pages/api/pokemon.json', 'utf-8');

    const data = JSON.parse(jsonString)
    let fetchPromises: Promise<void>[] = [];
    console.log("Search: ", pokemon)
    Object.keys(data).forEach((key) => {
      if (typeof pokemon === 'string') {
        const regex = new RegExp(pokemon, 'i');
        if(regex.test(key))
        {
          fetchPromises.push(
            new Promise(async (resolve, reject) => {
              try {
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
                resolve();
              } catch (error) {
                reject(error);
              }
            })
          );
        }
      }
    });
  await Promise.all(fetchPromises)
  res.status(200).json({list: listOfPokemonFeatures})

}
