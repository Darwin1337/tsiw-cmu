import { useState, useEffect } from 'react'

const colors = { normal: "#A8A77A", fire: "#EE8130", water: "#6390F0", electric: "#F7D02C", grass: "#7AC74C", ice: "#96D9D6", fighting: "#C22E28", poison: "#A33EA1", ground: "#E2BF65", flying: "#A98FF3", psychic: "#F95587", bug: "#A6B91A", rock: "#B6A136", ghost: "#735797", dragon: "#6F35FC", dark: "#705746", steel: "#B7B7CE", fairy: "#D685AD" };

export default function PokemonCard(props) {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        (async () => {
            try {
                const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + props.pokemon, { signal: controller.signal });
                if (response.ok) setPokemonData(await response.json());
                return new Error("Error happened whilst fetching from API");
            } catch(error) {
                if (error.name !== "AbortError") alert(error.message);
            }
        })();

        return () => controller.abort()
    }, [props.pokemon])

    return (
        <div className="w-full flex justify-center pt-10">
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-center">
                    <img className="rounded-t-lg" src={ pokemonData ? pokemonData.sprites.front_default : "https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg" } alt="Pokemon" />
                </div>
                <div className="p-5">
                    <div>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize text-center">{ pokemonData ? pokemonData.name : "Pokemon name" }</h5>
                    </div>
                    <div className="flex gap-3">
                        { pokemonData ? pokemonData.types.map((type, index) =>
                            <div key={ index } className="w-full min-w-[100px] py-2 px-3 text-sm capitalize font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300" style={{ backgroundColor: colors[type.type.name] }}>
                                { type.type.name }
                            </div>
                        ) : "No types" }
                    </div>
                </div>
            </div>
        </div>
    )
}
