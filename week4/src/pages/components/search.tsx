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
        {/* <label htmlFor="type">Type: </label> */}
        <select id="type" value={type} onChange={selectChange}>
          <option value="All">All</option>
          <option value="bug">Bug</option>
          <option value="dark">Dark</option>
          <option value="dragon">Dragon</option>
          <option value="electric">Electric</option>
          <option value="fairy">Fairy</option>
          <option value="fighting">Fighting</option>
          <option value="fire">Fire</option>
          <option value="flying">Flying</option>
          <option value="ghost">Ghost</option>
          <option value="grass">Grass</option>
          <option value="ground">Ground</option>
          <option value="ice">Ice</option>
          <option value="normal">Normal</option>
          <option value="poison">Poison</option>
          <option value="psychic">Psychic</option>
          <option value="rock">Rock</option>
          <option value="steel">Steel</option>
          <option value="water">Water</option>
        </select>
        <button className="button" type="submit">
          Search
        </button>
      </form>
    </div>
  )
}

export default Search
