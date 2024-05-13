import React from "react"

interface pokemonProps{
    pokemon: Record<string, any>;
    key: number;
}

const DisplayPokemon : React.FC<pokemonProps> = ({pokemon, key}) => 
{
    return (
        <>
        <li>
        <img src={pokemon.image}></img>
        <br></br>
        Name: {pokemon.name}
        <br></br>
        ID: {pokemon.id}
        <br></br>
        Type: {pokemon.type.map((pokemon : string, index : number) => (
            <div key={index} className="type-item">
                {pokemon}
         </div>
        
            ))}
        </li>
        </>
    )
}

export default DisplayPokemon