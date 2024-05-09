import React from 'react'

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

export default DisplayTable