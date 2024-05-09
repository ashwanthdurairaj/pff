import React, {ChangeEvent, FormEvent} from 'react'

interface searchProps{
    search: string;
    change: (event: ChangeEvent<HTMLInputElement>) => void;
    submit: (event: FormEvent<HTMLFormElement>) => void;
}

const Search : React.FC<searchProps> = ({search, change, submit}) => 
{
    
    return (
        <div>
        <form onSubmit = {submit}>
            <input type = "text" placeholder = "Search Pokemon" value = {search} onChange = {change} />
            <button type = "submit">Search</button>
        </form>
        </div>
    )

}

export default Search