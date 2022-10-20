import { Component } from "react"
import PokemonCard from "./PokemonCard.js"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.pokemons = ["pikachu", "bulbasaur", "ivysaur", "venusaur", "squirtle", "wartortle", "blastoise", "charmander", "charmeleon", "charizard"];
    this.state = { name: this.pokemons[Math.floor(Math.random() * this.pokemons.length)] };
  }

  componentDidMount() {  
    this.newPokemonInterval = setInterval(() => {
      this.setState({ name: this.pokemons[Math.floor(Math.random() * this.pokemons.length)] })
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.newPokemonInterval);
  }

  render = () => <PokemonCard name={ this.state.name } />;
}
