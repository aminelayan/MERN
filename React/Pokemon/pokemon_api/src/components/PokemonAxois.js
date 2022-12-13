import React ,{useState }from 'react'
import axios from "axios"


const PokemonAxois = () => {
  const [pokemons,setPokemon]= useState([]);
    const pokemonHandler=()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        .then(pokemons => {setPokemon(pokemons.data.results)})
        console.log(pokemons);
    };
  return (
    <div>
      <button onClick={pokemonHandler}>TANAS</button>

      {pokemons.map((pokemons,id) =>{
            return (<div key={id}> {pokemons.name}</div>)})}

    </div>
  )
}

export default PokemonAxois