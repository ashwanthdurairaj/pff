import React, {ChangeEvent, FormEvent} from 'react'

interface searchProps{
    search: string;
    change: (event: ChangeEvent<HTMLInputElement>) => void;
    submit: (event: FormEvent<HTMLFormElement>) => void;
}

const Search : React.FC<searchProps> = ({search, change, submit}) => 
{
    
    return (
        <div className="searchBar">
        <form onSubmit = {submit} className="form">
            <input className = "search" type = "text" placeholder = "Search Pokemon" value = {search} onChange = {change} />
            <button className = "button" type = "submit">Search</button>
        </form>
        </div>
    )

}

export default Search