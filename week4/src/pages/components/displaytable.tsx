import React from 'react'
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
          <div className="pokemon" key={index}>
            <DisplayPokemon pokemon={pokemon} />
          </div>
        ))
      ) : (
        <div className="noPokemon">NO POKEMON TO DISPLAY</div>
      )}
    </div>
  )
}

export default DisplayTable
