const searchButton = document.getElementById("search_Button");
const pokemonId = document.getElementById("pokemon_Id");
const pokemonContainer = document.getElementById("pokemon_Container");

const button = async () => {
  searchedPokemon = pokemonId.value.trim();

  // pokemonContainer.innerHTML = ""; // Limpiar el contenedor

  if (searchedPokemon === "") {
    pokemonContainer.innerHTML =
      "<p>Por favor ingrese un número del 1 al 1025</p>";
    return;
  }

  try {
    const pokemon = await fetchPokemonData(searchedPokemon);
    const pokemonCard = `
          <div class="pokemon-card">
              <h2>${pokemon.name}</h2>
              <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
              <p>Tipo: ${pokemon.types
                .map((typeInfo) => typeInfo.type.name)
                .join(", ")}</p>
              <p>Altura: ${(pokemon.height / 10).toFixed(1)} m</p>
              <p>Peso: ${(pokemon.weight / 10).toFixed(1)} kg</p>
          </div>
      `;
    pokemonContainer.innerHTML = pokemonCard;
  } catch (error) {
    pokemonContainer.innerHTML = `<p>${error.message}</p>`;
  }
};

const init = () => {
  searchButton.addEventListener("click", button);
};

init();
