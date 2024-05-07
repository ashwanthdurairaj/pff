import React, {ChangeEvent, FormEvent, SetStateAction, useState} from 'react'

interface searchProps{
    search: string;
    change: (event: ChangeEvent<HTMLInputElement>) => void;
    submit: (event: FormEvent<HTMLFormElement>) => void;
}

interface displayProps{
    display: {name: string,
        id: string,
        type: string[],
        picture: string
    };
}

const Search : React.FC<searchProps> = ({search, change, submit}) => 
{
    
    return (
        <form onSubmit = {submit}>
            <input type = "text" placeholder = "Search Pokemon" value = {search} onChange = {change} />
            <button type = "submit">Search</button>
        </form>
    )

}

function PokeSearch()
{

    const [display, setDisplay] = useState({
        name : "",
        id: "",
        type: [],
        picture: "",
    })

    const [search, setSearch] = useState("")

    const onChange = (event : ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    const submit = (event : FormEvent<HTMLFormElement>) => {
        
        event.preventDefault()
        fetch(`https://pokeapi.co/api/v2/pokemon/${search}`).then(data => data.json()
        )
        .then(function(pokemon : Record<string, any>){
            // pokemon.types.forEach((object : Record<string, any>) => {
            //     console.log(object.type)
            // })
            setDisplay(prevState => ({
                ...prevState,
                name: pokemon.name,
                id: pokemon.id,
                picture: pokemon.sprites.front_default,
                type: pokemon.types.map((pokemon : Record<string, any>) => (pokemon.type.name))
              }))     
        })
    }


    return (
        <>
        <Search search = {search} change = {onChange} submit = {submit}/>
        <DisplayTable display = {display}/>
        </>
    )
}

const DisplayTable : React.FC<displayProps> = ({display}) =>
{
    const {name, id, type, picture} = display
    return (
        <>
        <div>
            {name}
        </div>
        <div>
            {id}
        </div>
        <div>
        {type.map((pokemon, index) => (
        <div key={index}>
          <p>{pokemon}</p>
        </div>
        ))}
        </div>
        <div>
            <img src={picture}></img>
        </div>
        </>
    )
}

// function DisplayPokemon()
// {

// }

export default PokeSearch