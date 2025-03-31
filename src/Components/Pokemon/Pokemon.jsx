import React, { useState, useEffect } from "react";
import "./Pokemon.css";
import PokemonCard from "../PokemonCard/PokemonCard";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");
  const [loading,setLoading]=useState(true);

  const Api = "https://pokeapi.co/api/v2/pokemon?limit=1032";

  const fetchPokemon = async () => {
    const ref = await fetch(Api);
    const data = await ref.json();

    const detailPokemon = data.results.map(async (currentPokemon) => {
      const response = await fetch(currentPokemon.url);
      const pokemonData = await response.json();
      return pokemonData;
    });

    const pokemonResponse = await Promise.all(detailPokemon);
    setPokemon(pokemonResponse);
    setLoading(false)
  };

  useEffect(() => {
    fetchPokemon();
  }, []);
  if (loading){
   return <div>
    <h1> Loading......</h1>
   </div>
  }

 
  const searchPokemon = pokemon.filter((poke) =>
    poke.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <header>
        <h1 className="heading">Let's Catch Pokémon</h1>
      </header>
      <div className="search-pokemon">
        <input
          type="text"
          placeholder="Search Pokémon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <ul className="flex">
          {searchPokemon.map((cuPokemon) => (
            <PokemonCard key={cuPokemon.id} pokemonData={cuPokemon} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pokemon;
