import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

function App() {
  //state (état, données)
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  //comportements (dynamique)

  const handleClickPrevious = () => {
    setPokemonIndex(pokemonIndex - 1);
  };
  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  console.log(pokemonIndex);

  const isPrev = pokemonIndex > 0;
  const isNext = pokemonIndex < pokemonList.length - 1;

  //affichage (render)
  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      {isPrev ? (
        <button onClick={handleClickPrevious}>Précédent</button>
      ) : (
        <button>Précédent</button>
      )}
      {isNext ? (
        <button onClick={handleClickNext}>Suivant</button>
      ) : (
        <button>Suivant</button>
      )}
    </div>
  );
}

export default App;
