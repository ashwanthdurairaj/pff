import React, { ChangeEvent, FormEvent } from 'react'

interface searchProps {
  search: string
  type: string
  change: (event: ChangeEvent<HTMLInputElement>) => void
  submit: (event: FormEvent<HTMLFormElement>) => void
  selectChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

const Search: React.FC<searchProps> = ({
  search,
  type,
  change,
  submit,
  selectChange,
}) => {

  const options : string[] = ['All', 'Bug', 'Dark', 'Dragon', 'Electric', 'Fairy', 'Fighting',
    'Fire', 'Flying', 'Ghost', 'Grass', 'Ground', 'Ice', 'Normal', 'Poison', 'Psychic',
    'Rock', 'Steel', 'Water'
  ]

  return (

    <div className="searchBar">
      <form onSubmit={submit} className="form">
        <input
          className="search"
          type="text"
          placeholder="Search Pokemon"
          value={search}
          onChange={change}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div>
      <select id="type" className="select" value={type} onChange={selectChange} >
          {
            options.map((option: string) => (
              <option value={option.toLowerCase()}>{option}</option>
            ))
          }
        </select>
      </div>
      
    </div>
  )
}

export default Search
