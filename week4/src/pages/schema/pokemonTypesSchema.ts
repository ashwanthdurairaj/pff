interface Type {
  name: string
  url: string
}

export interface PokemonType {
  slot: number
  type: Type
}

// {"slot":1,"type":{"name":"grass","url":"https://pokeapi.co/api/v2/type/12/"}}
