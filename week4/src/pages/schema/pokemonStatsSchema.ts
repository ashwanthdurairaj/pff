interface Stat{
    name: string;
    url: string
}

export interface PokemonStats{
    base_stat: number;
    effort: number;
    stat: Stat;
}