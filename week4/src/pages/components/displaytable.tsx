import React from 'react'
import DisplayPokemon from './displaypokemon'

interface displayProps{
    list: Record<string, any>[]
}

const DisplayTable : React.FC<displayProps> = ({list}) =>
{
    return (
        <div>
            {list.length > 0 && list.map((pokemon, index) => (
            <ul>
                <DisplayPokemon pokemon={pokemon} key={index}/>
            </ul>
        ))}
        </div>
    )
}

export default DisplayTable