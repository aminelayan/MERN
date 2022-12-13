import React, { useState } from 'react'

const PokemonAPI = () => {
    const [pokemons,setPokemon]= useState([]);
    const pokemonHandler=()=>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        .then(response => response.json())
        .then(response => {setPokemon(response.results)})
        console.log("tanas");
    };
  return (
    <div>
        <button onClick={pokemonHandler}>Fetch Pokemon</button>

    <div>
        {pokemons.map((pokemons,id) =>{
            return (<div key={id}> {pokemons.name}</div>)})}
    </div>

    </div>
  )
}

export default PokemonAPI