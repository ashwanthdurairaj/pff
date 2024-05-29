import React from "react"
import Image from 'next/image'
import {Pokemon} from '../schema/pokemonSchema'
import {TypeIconProps} from '../schema/typeIconSchema'

interface pokemonProps{
    pokemon: Pokemon;
    key: number;
}

const typeIcons: TypeIconProps = {
    bug: '/images/bug.svg',
    dark: '/images/dark.svg',
    dragon: '/images/dragon.svg',
    electric: '/images/electric.svg',
    fairy: '/images/fairy.svg',
    fighting: '/images/fighting.svg',
    fire: '/images/fire.svg',
    flying: '/images/flying.svg',
    ghost: '/images/ghost.svg',
    grass: '/images/grass.svg',
    ground: '/images/ground.svg',
    ice: '/images/ice.svg',
    normal: '/images/normal.svg',
    poison: '/images/poison.svg',
    psychic: '/images/psychic.svg',
    rock: '/images/rock.svg',
    steel: '/images/steel.svg',
    water: '/images/water.svg'
}

const DisplayPokemon : React.FC<pokemonProps> = ({pokemon, key}) => 
{
    return (
        <div className="pokemonItem">
        <img src={pokemon.image}></img>
        <div style={{ textTransform: 'uppercase' }}>
        {pokemon.name}
        </div>
        <div className="types">
        {pokemon.type.map((type : string, index : number) => (
            <div key={index}>
                <Image src = {typeIcons[type as keyof TypeIconProps]}
                width={30} height={30} alt="lmao"/>
                <br></br>
                <span className={`${type}`}>
                {type}
                </span>
            </div>
            ))}
        </div>
        </div>
    )
}

export default DisplayPokemon