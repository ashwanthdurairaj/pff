import {useRouter} from 'next/router'
import { useGetPokemonDetailsByUrlQuery } from '../services/fetchPokemonDetails'
import {PokemonType} from '../schema/pokemonTypesSchema'
import { PokemonStats } from '../schema/pokemonStatsSchema';

function PokemonDetails()
{
    const router = useRouter();
    const { url } = router.query;

    const {data, error, isLoading} = useGetPokemonDetailsByUrlQuery(url)

    if(!data || !data.sprites)
    {
        return (
            <div className="centered-container">
            <div className="spinner"></div>
            </div>
        )
    }

    return (
        <div className="pokemonDetails">
            <div className="imageAndStats">
            <div>
            <img className="pokemonImage" src={data.sprites.front_default}></img>
            </div>
            <div className="pokemonNameAndType">
            <div className="pokemonName">
            {data.name}
            </div>
            <br></br>
            <div className="pokemonType">
            {data.types.map((type: PokemonType, index: number) => (
            <div key={index} >
            <span className={`${type.type.name}`}>{type.type.name}</span>
          </div>
        ))}
        </div>
            </div>
            <div className="pokemonStats">
                Stats
                <br></br>
                {
                    data.stats.map((stat: PokemonStats) => (
                        <div>
                        {stat.stat.name}: {stat.base_stat}
                        <div className="progress-bar">
                        <div className="progress" style={{width: `${stat.base_stat / 2}%`}}></div>
                        </div>
                        </div>
                    ))
                }
            </div>
            
            </div>
        </div>
    )
}

export default PokemonDetails