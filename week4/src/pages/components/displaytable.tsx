import React from 'react'
import DisplayPokemon from './displaypokemon'

interface displayProps{
    display: {name: string,
        id: string,
        type: string[],
        picture: string
    };
}

const DisplayTable : React.FC<displayProps> = ({display}) =>
{
    const {name, id, type, picture} = display
    return (
        <div>
            <img src={picture} alt="Pokemon"></img>
            <br></br>
            Name: {name}
            <br></br>
            ID: {id}
            <br></br>
            Types: 
            <div className="types-container">
            {type.map((pokemon, index) => (
            <div key={index} className="type-item">
                {pokemon}
            </div>
            ))}
            </div>
            
        </div>

    )
}

export default DisplayTable