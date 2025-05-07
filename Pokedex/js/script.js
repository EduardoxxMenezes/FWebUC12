//Img
let imgPokemon = document.querySelector("#pokeImg");

//Inserir ID
let formPoke = document.querySelector("#form");
let inputF = document.querySelector("#inputForm");

//ID e nome
let idPoke = document.querySelector("#idPokemon");
let nomePoke = document.querySelector("#nomePokemon");

//Tipos
let tipo1 = document.querySelector("#tipo1");
let tipo2 = document.querySelector("#tipo2");

//Habilidade, peso e altura (Informações)
let habilidadePoke = document.querySelector("#habilidade");
let pesoPoke = document.querySelector("#peso");
let alturaPoke = document.querySelector("#altura");

//Botões
let btnVoltar = document.querySelector("#btnVoltar");
let btnProximo = document.querySelector("#btnProximo");


let numeroPokedex = 1;

const fetchPokemon = async (pokemon) => {
  const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await APIresponse.json();
  return data;
};

const showPokemon = async (pokemon) => {
  const dataPokemon = await fetchPokemon(pokemon);
  imgPokemon.src = dataPokemon.sprites.other.showdown.front_default;
  nomePoke.innerHTML = dataPokemon.name;
  idPoke.innerHTML = dataPokemon.id;
  tipo1.innerHTML = dataPokemon.types[0].type.name;
  tipo2.innerHTML = dataPokemon.types[1].type.name;
  habilidadePoke.innerHTML = dataPokemon.abilities[0].ability.name;
  pesoPoke.innerHTML = pesoConvert(dataPokemon.weight);
  alturaPoke.innerHTML = alturaConvert(dataPokemon.height);
  numeroPokedex = dataPokemon.id;
  let audio = dataPokemon.cries.legacy;
  playAudio(audio);
  
};

formPoke.addEventListener("submit", (event) => {
  event.preventDefault();
  showPokemon(inputF.value.toLowerCase());
  numeroPokedex = inputF.value;
});
function pesoConvert(peso) {
  return (peso / 10).toFixed(2);
};

function alturaConvert(altura) {
  return (altura / 10).toFixed(2);
};

btnVoltar.addEventListener("click", (event) => {
    if(numeroPokedex > 1){numeroPokedex = numeroPokedex - 1
        showPokemon(numeroPokedex);
    }
});

btnProximo.addEventListener("click", (event) => {
    if(numeroPokedex < 1025){numeroPokedex = numeroPokedex + 1
        showPokemon(numeroPokedex)}
   
});

function playAudio(audio2){
    audio = new Audio(audio2);
    audio.play();
}
showPokemon(numeroPokedex);