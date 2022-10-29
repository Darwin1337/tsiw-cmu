import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard.js"

const pokemons = ["pikachu", "bulbasaur", "ivysaur", "venusaur", "squirtle", "wartortle", "blastoise", "charmander", "charmeleon", "charizard"];

export default function App() {
  const [randomPokemon, setRandomPokemon] = useState(pokemons[Math.floor(Math.random() * pokemons.length)])

  useEffect(() => {
    const pokemonInterval = setInterval(() => setRandomPokemon(pokemons[Math.floor(Math.random() * pokemons.length)]), 3000);

    return () => clearInterval(pokemonInterval);

  }, [])

  return <PokemonCard pokemon={ randomPokemon } />
}