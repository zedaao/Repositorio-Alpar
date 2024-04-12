const pokemonListDom = document.querySelector(".div");
let carregando = false;
let offset = 0;
let count = 0;
let max = 50;
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
  psychic: "#7b62a3",
  flying: "#4592c4",
  fighting: "#d56723",
  normal: "#a4acaf",
  ice: "#51c4e7",
  ghost: "#7b62a3",
  steel: "#9eb7b8",
  dark: "#444",
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

  offset += response.results.length;
  carregando = false;
  count = response.count;
}

function showPokemon(pokemon) {
  const name = pokemon.name;

  const pokemonSprit =
    pokemon.sprites.versions["generation-v"]["black-white"].animated
      .front_default;

  const pokemonNumber = `${pokemon.id}`.padStart(3, 0);

  const types = pokemon.types.map((item) => {
    return item.type.name;
  });

  const pokemonStats = pokemon.stats.map((item) => {
    const states = {
      name: item.stat.name,
      state: item.base_stat,
    };
    return states;
  });

  pokemonListDom.innerHTML += `
  <div class='pokemon_cards'>
    <h1 class="pokemon_name">${name}</h1>
    <div class="bg_card">
      <img src="${pokemonSprit}" alt="pokemon-sprites" class="img">
    </div>

    <span class="pokemon_id">N°${pokemonNumber}</span>

    <div class='types'>
    ${types
      .map(
        (item) =>
          `<span class="pokemon_type" style="background-color:${colors[item]}"  >${item}</span>`
      )
      .join("")}
    </div>

    <ul>
      ${pokemonStats
        .map(
          (item) => `<li><p>${item.name}</p> <span>${item.state}</span></li>`
        )
        .join("")}
    </ul>
  </div>
`;
}

window.addEventListener("scroll", () => {
  const max = document.body.scrollHeight - window.innerHeight;
  const current = window.scrollY;
  const percent = current / max;

  if (offset > count) {
  }

  if (percent > 0.7 && carregando === false && count) {
    carregando = true;
    console.log(percent);
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=` + offset)
      .then((response) => response.json())
      .then(loadPoekemons)
      .catch((erro) => console.log(erro));
  }
});
