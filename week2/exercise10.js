const pokemons = [
    {
        "id": 1,
        "name": "bulbasaur",
        "height": 7,
        "weight": 69,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "id": 2,
        "name": "ivysaur",
        "height": 10,
        "weight": 130,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "id": 3,
        "name": "venusaur",
        "height": 20,
        "weight": 1000,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "grass",
                    "url": "https://pokeapi.co/api/v2/type/12/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ]
    },
    {
        "id": 4,
        "name": "charmander",
        "height": 6,
        "weight": 85,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "id": 5,
        "name": "charmeleon",
        "height": 11,
        "weight": 190,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            }
        ]
    },
    {
        "id": 6,
        "name": "charizard",
        "height": 17,
        "weight": 905,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "fire",
                    "url": "https://pokeapi.co/api/v2/type/10/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "flying",
                    "url": "https://pokeapi.co/api/v2/type/3/"
                }
            }
        ]
    },
    {
        "id": 7,
        "name": "squirtle",
        "height": 5,
        "weight": 90,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "id": 8,
        "name": "wartortle",
        "height": 10,
        "weight": 225,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "id": 9,
        "name": "blastoise",
        "height": 16,
        "weight": 855,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "water",
                    "url": "https://pokeapi.co/api/v2/type/11/"
                }
            }
        ]
    },
    {
        "id": 10,
        "name": "caterpie",
        "height": 3,
        "weight": 29,
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            }
        ]
    }
]

function filterPokemonBasedOnHeight(pokemons, desiredHeight)
{
    return pokemons.filter((pokemon) => 
        pokemon.height >= desiredHeight
    )

}

answer = filterPokemonBasedOnHeight(pokemons, 15)
console.log(answer)
