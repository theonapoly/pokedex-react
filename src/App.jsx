import PokemonCard from "./components/PokemonCard";

function App() {
  //state (état, données)
  const pokemonlist = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    { name: "mew" },
  ];

  //comportements (dynamique)

  //affichage (render)
  return (
    <div>
      <PokemonCard pokemon={pokemonlist[0]} />
    </div>
  );
}

export default App;
