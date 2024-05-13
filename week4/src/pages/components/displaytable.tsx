import React from 'react'
import DisplayPokemon from './displaypokemon'

interface displayProps{
    list: Record<string, any>[];
    loading: boolean;
}

const DisplayTable : React.FC<displayProps> = ({list, loading}) =>
{
    return (
        <div className="types-container">
            {loading && <p className="types-container">Loading...</p>}
            {list.length > 0 ? (list.map((pokemon, index) => (
            <ul>
                <DisplayPokemon pokemon={pokemon} key={index}/>
            </ul>
        ))): (
            <p>No pokemon to display</p>
        )}
        </div>
    )
}

export default DisplayTable