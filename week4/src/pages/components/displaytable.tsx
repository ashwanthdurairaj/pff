import React from 'react'
import DisplayPokemon from './displaypokemon'
import { Pokemon } from '../schema/pokemonSchema';

interface displayProps{
    list: Pokemon[];
    loading: boolean;
}

const DisplayTable : React.FC<displayProps> = ({list, loading}) =>
{

    return (
        
        <div className="list-containers">
            {loading ? (<div className="spinner"></div>) : (list.length > 0 ? (list.map((pokemon, index) => (
                <div className="pokemon">
                <DisplayPokemon pokemon={pokemon} key={index}/>
                </div>
        ))): (
            <div className="noPokemon">NO POKEMON TO DISPLAY</div>
        ))}
        </div>
    )
}

export default DisplayTable