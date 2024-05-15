import React from "react"

interface pokemonProps{
    pokemon: Record<string, any>;
    key: number;
}

const DisplayPokemon : React.FC<pokemonProps> = ({pokemon, key}) => 
{
    return (
        <div className="pokemonItem">
        <img src={pokemon.image}></img>
        <div style={{ textTransform: 'uppercase' }}>
        NAME: {pokemon.name}
        </div>
        <div style={{ textTransform: 'uppercase' }}>
        ID: {pokemon.id}
        </div>
        <div className="types">
        TYPE: {pokemon.type.map((pokemon : string, index : number) => (
            <div key={index} style = {{textTransform: 'uppercase'}}>
                {pokemon}
         </div>
            ))}
        </div>
        </div>
    )
}

export default DisplayPokemon