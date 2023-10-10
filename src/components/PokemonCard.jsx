function PokemonCard() {
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
  const pokemon = pokemonlist[1];
  const isScr = pokemon.imgSrc;
  //affichage (render)

  return (
    <div>
      <figure>
        {isScr ? (
          <>
            <img src={pokemon.imgSrc} alt={pokemon.name} />
            <figcaption>{pokemon.name}</figcaption>
          </>
        ) : (
          <>
            <p>????</p>
            <figcaption>{pokemon.name}</figcaption>
          </>
        )}
      </figure>
    </div>
  );
}

export default PokemonCard;
