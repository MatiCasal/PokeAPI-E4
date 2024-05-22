const fetchPokemonData = async (pokemonId) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );
  if (!response.ok) {
    throw new Error("Pokémon no encontrado");
  }
  const pokemon = await response.json();
  return pokemon;
};
