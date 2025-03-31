import React from "react";
import "./PokemonCard.css";
const PokemonCard = ({ pokemonData }) => {
  return (
    <div>
      <li className="cart">
        <figure>
          <img
            src={pokemonData.sprites.other.dream_world.front_default}
            alt=""
          />
          <h1> Name:{pokemonData.name}</h1>
          <h2> Type:{pokemonData.types.map((curr) => curr.type.name).join(" ,")}</h2>
          <div className="pro">
            <p>Height:{pokemonData.height}</p>
            <p>weight:{pokemonData.weight}</p>
          </div>
        </figure>
      </li>
    </div>
  );
};

export default PokemonCard;
