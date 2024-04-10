const pokemonName = document.querySelector(".pokemon_name");
const pokemonNumber = document.querySelector(".pokemon_number");
const pokemonGif = document.querySelector(".img_pokemon");
const pokemonType1 = document.querySelector(".pokemon_type1");
const pokemonType2 = document.querySelector(".pokemon_type2");
const pokemonHeight = document.querySelector(".pokemon_height");
const pokemonWeight = document.querySelector(".pokemon_weight");

const form = document.querySelector(".form_pokemon");
const pokemonValue = document.querySelector(".input_search");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");

let globalPokemon = 1;

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

const fetchPokemon = async (pokemon) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  if (response.status === 200) {
    const data = await response.json();
    return data;
  }
};

const renderPokemon = async (pokemon) => {
  pokemonName.innerText = "Carregando...";
  pokemonType1.style.display = "block";
  pokemonType2.style.display = "block";
  pokemonType2.innerText = "";
  pokemonType2.style.backgroundColor = "transparent";
  pokemonHeight.innerHTML = "";
  pokemonWeight.innerHTML = "";

  const data = await fetchPokemon(pokemon);
  pokemonNumber.innerHTML = " ";

  if (data) {
    pokemonGif.style.display = "block";
    pokemonName.innerText = data.name;
    pokemonNumber.innerHTML = `${data.id}`.padStart(3, 0);
    globalPokemon = data.id;
    pokemonHeight.innerHTML = data.height / 10 + " m";
    pokemonWeight.innerHTML = data.weight / 10 + "kg";

    let color1 = colors[data.types[0].type.name];
    pokemonType1.innerText = data.types[0].type.name;
    pokemonType1.style.backgroundColor = color1;

    if (data.types[1]) {
      let color2 = colors[data.types[1].type.name];
      pokemonType2.innerText = data.types[1].type.name;
      pokemonType2.style.backgroundColor = color2;
    }
    pokemonGif.src = data.sprites.other.showdown.front_shiny;
    pokemonValue.value = "";
  } else {
    pokemonGif.style.display = "none";
    pokemonName.innerText = "Não encontrado";
    pokemonNumber.innerHTML = " ";
    pokemonType1.style.display = "none";
    pokemonType2.style.display = "none";
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(pokemonValue.value);
  renderPokemon(pokemonValue.value.toLowerCase());
});

btnNext.addEventListener("click", () => {
  globalPokemon += 1;
  renderPokemon(globalPokemon);
});

btnPrev.addEventListener("click", () => {
  if (globalPokemon > 1) {
    globalPokemon -= 1;
    renderPokemon(globalPokemon);
  }
});

renderPokemon(globalPokemon);
