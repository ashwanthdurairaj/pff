import React from "react"

interface pokemonProps{
    pokemon: Record<string, any>;
    key: number;
}

const DisplayPokemon : React.FC<pokemonProps> = ({pokemon, key}) => 
{
    return (
        <>
        <li key={key}>
        {pokemon.image}
        Name: {pokemon.name}
        ID: {pokemon.id}
        Type: {pokemon.map((pokemon : string, index : number) => (
            <div key={index} className="type-item">
                {pokemon}
         </div>
            ))}
        </li>
        </>
    )
}

export default DisplayPokemon