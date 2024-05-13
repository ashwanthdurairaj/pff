import React from 'react'
import DisplayPokemon from './displaypokemon'

interface displayProps{
    list: Record<string, any>[];
    loading: boolean;
}

const DisplayTable : React.FC<displayProps> = ({list, loading}) =>
{

    return (
        
        <div className="list-containers">
            {loading ? (<div className="types-container">Loading...</div>) : (list.length > 0 ? (list.map((pokemon, index) => (
                <div>
                <ul>
                <DisplayPokemon pokemon={pokemon} key={index}/>
                </ul>
                </div>
        ))): (
            <div>No pokemon to display</div>
        ))}
        </div>
    )
}

export default DisplayTable