const colors = {
  fire: "#ee6b2f",
  grass: "#008000",
  electric: "#f7de3f",
  water: "#3dc7ef",
  ground: "#a38c21",
  rock: "#d5d5d4",
  fairy: "#fdb9e9",
  poison: "#7b62a3",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#4592c4",
  fighting: "#d56723",
  normal: "#a4acaf",
  ice: "#51c4e7",
  ghost: "#7b62a3",
  steel: "#9eb7b8",
};

fetch(`https://pokeapi.co/api/v2/pokemon?limit=20.`)
  .then((response) => response.json())
  .then(loadPoekemons)
  .catch((erro) => console.log(erro));

async function loadPoekemons(response) {
  const pokemons = response.results;
  for (let i in pokemons) {
    const pokeResponse = await fetch(pokemons[i].url);
    const pokemon = await pokeResponse.json();
    showPokemon(pokemon);
  }
}

function showPokemon(pokemon) {
  const pokemonListDom = document.querySelector(".div");
  const name = pokemon.name;

  const pokemonSprit =
    pokemon.sprites.versions["generation-v"]["black-white"].animated
      .front_default;

  const pokemonNumber = `${pokemon.id}`.padStart(3, 0);

  const types = pokemon.types.map((item) => {
    return item.type.name;
  });

  pokemonListDom.innerHTML += `
  <div class='pokemon_cards'>
    <h1 class="pokemon_name">${name}</h1>
    <div class="bg_card">
      <img src="${pokemonSprit}" alt="pokemon-sprites" class="img">
    </div>

    <span class="pokemon_id">N°${pokemonNumber}</span>

    ${types
      .map(
        (item) =>
          `<span class="pokemon_type" style="color:${colors[item]}"  >${item}</span>`
      )
      .join("")}
                
    <ul>
      <li><p>${pokemon.stats[0].stat.name}</p> <span>${
    pokemon.stats[0].base_stat
  }</span></li>
      <li><p>${pokemon.stats[1].stat.name}</p> <span>${
    pokemon.stats[1].base_stat
  }</span></li>
      <li><p>${pokemon.stats[2].stat.name}</p> <span>${
    pokemon.stats[2].base_stat
  }</span></li>
      <li><p>${pokemon.stats[3].stat.name}</p> <span>${
    pokemon.stats[3].base_stat
  }</span></li>
      <li><p>${pokemon.stats[4].stat.name}</p> <span>${
    pokemon.stats[4].base_stat
  }</span></li>
      <li><p>${pokemon.stats[5].stat.name}</p> <span>${
    pokemon.stats[5].base_stat
  }</span></li>
    </ul>
  </div>
`;
}
