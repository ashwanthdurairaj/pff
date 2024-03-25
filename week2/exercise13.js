const pokemonDescription = [
    {
        "id": 1,
        "description": "Loves to eat"
    },
    {
        "id": 2,
        "description": "Proud of its power"
    },
    {
        "id": 3,
        "description": "Sturdy body"
    },
    {
        "id": 4,
        "description": "Highly curious"
    },
    {
        "id": 5,
        "description": "Strong willed"
    },
    {
        "id": 6,
        "description": "Likes to run"
    },
    {
        "id": 7,
        "description": "Takes plenty of siestas"
    },
    {
        "id": 8,
        "description": "Likes to thrash about"
    },
    {
        "id": 9,
        "description": "Capable of taking hits"
    },
    {
        "id": 10,
        "description": "Mischievous"
    }
]

function reducer(accumulator, currentValue)
{
    accumulator[currentValue.id] = currentValue
    return accumulator
}

const output = pokemonDescription.reduce(reducer, {})

console.log(output)