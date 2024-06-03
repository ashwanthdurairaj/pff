import React from 'react'
import { Pokemon } from '../schema/pokemonSchema'

interface pokemonProps {
  pokemon: Pokemon
}

const DisplayPokemon: React.FC<pokemonProps> = ({ pokemon }) => {

  return (
    <div className="pokemonItem">
      <img src={pokemon.image} alt={pokemon.name}></img>
      <div style={{ textTransform: 'uppercase' }}>{pokemon.name}</div>
      <br></br>
      <div className="types">
        {pokemon.type.map((type: string, index: number) => (
          <div key={index}>
            <svg width={30} height={30} aria-hidden="true">
            <use xlinkHref={`sprite.svg#${type}`} />
            </svg>
            <br></br>
            <br></br>
            <span className={`${type}`}>{type}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DisplayPokemon
