function NavBar({
  pokemonIndex,
  handleClickPrevious,
  handleClickNext,
  pokemonList,
}) {
  //state (état, données)

  //comportements (dynamique)
  const isPrev = pokemonIndex > 0;
  const isNext = pokemonIndex < pokemonList.length - 1;

  //affichage (render)
  return (
    <div>
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

export default NavBar;
