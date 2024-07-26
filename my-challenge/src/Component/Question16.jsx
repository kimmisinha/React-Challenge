import React, { useEffect, useState } from "react";
import '../Css/Question16.css';  

function Question16() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=500")
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data.results);
        setLoading(false);
        console.log(data.results);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  const showMorePokemon = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  if (loading) {
    return <div className="spinner">Loading...</div>;
  }

  return (
    <div>
      <h1>Pokémon</h1>
      <ul>
        {pokemon.slice(0, visibleCount).map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
      {visibleCount < pokemon.length && (
        <button onClick={showMorePokemon}>Show More Pokémon</button>
      )}
    </div>
  );
}

export default Question16;
