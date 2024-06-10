import React from 'react'
import Link from 'next/link'
import DisplayPokemon from './displaypokemon'
import { Pokemon } from '../schema/pokemonSchema'

interface displayProps {
  list: Pokemon[]
}

const DisplayTable: React.FC<displayProps> = ({ list }) => {
  
  return (
    <div className="list-containers">
      {list && list.length > 0 ? (
        list.map((pokemon, index) => (
          <Link href={{
            pathname: `/pokemon/${index}`,
            query: { url: pokemon.url }   
        }} style={{ textDecoration: 'none' }} target="_blank" passHref>
          <div className="pokemon" key={index}>
            <DisplayPokemon pokemon={pokemon} />
          </div>
          </Link>
        ))
      ) : (
        <div className="noPokemon">NO POKEMON TO DISPLAY</div>
      )}
    </div>
  )
}

export default DisplayTable
