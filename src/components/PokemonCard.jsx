function PokemonCard({ pokemon }) {
  console.log(pokemon);

  //state (état, données)

  //comportements (dynamique)
  //   const pokemon = pokemonlist[1];
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
