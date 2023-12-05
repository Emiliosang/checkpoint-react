import { useState } from "react"

export default function PokemonFetch() {
    const [pokemonData, setPokemonData] = useState('')
    const [pokemonName, setPokemonName] = useState('')

    function Fetch() {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => {setPokemonData(data);
        return data
    })
        .then(data => console.log(data))
        .catch((err) => console.error(err))
    }

    function handleChange(e) {
        setPokemonName(e.target.value)
    }

    return(
        <>
        <div>
            <label htmlFor="pokemonName">
                <input type="text" name="pokemonName" value={pokemonName}
                onChange={handleChange}/>
                <button onClick={Fetch}>Fetch</button>
            </label>

            {pokemonData && (
                <div>
                    <img src={pokemonData.sprites.back_default} alt="" />
                    <p>{pokemonData.name}</p>
                    <p>{pokemonData.base_experience}</p>
                    <p>{pokemonData.abilities[0]}</p>
                </div>
            )}    

        </div>
        </>
    )
}