import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  //state (état, données)

  //comportements (dynamique)
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

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};
