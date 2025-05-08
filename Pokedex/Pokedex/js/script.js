const tipo1 = document.querySelector("#tipo1");
const tipo2 = document.querySelector("#tipo2");
const imgPokemon = document.querySelector("#pokeImg");
const idPokemon = document.querySelector("#idPokemon");
const nomePokemon = document.querySelector("#nomePokemon");
const pesoPokemon = document.querySelector("#peso");
const habilidade = document.querySelector("#habilidade");
const alturaPokemon = document.querySelector("#altura");
const input = document.querySelector("#inputForm");
const formNome = document.querySelector("#form");
const btnA = document.querySelector("#btnVoltar");
const btnB = document.querySelector("#btnProximo");
const audioPokemon = document.querySelector("#audioPokemon");
const tipo1img = document.querySelector("#TI1");
const tipo2img = document.querySelector("#TI2")
const musica = document.querySelector("#intro");

let idPoke = 1;

const fetchPokemon =  async (pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await APIresponse.json()
    return data
};

function imageError(linkGif, linkImg){
imgPokemon.src = linkGif;

imgPokemon.onerror = function(){
    this.onerror = null;
    this.src = linkImg;
};
    return;
};

const tipoParaImagem = (tipo) => {
    return `img/types/${tipo}.png`;
  };


const showPokemon = async (pokemon) => {
    const dataPokemon = await fetchPokemon(pokemon);
    idPoke = dataPokemon.id;
    idPokemon.innerHTML = dataPokemon.id;
    nomePokemon.innerHTML = dataPokemon.name.toUpperCase();
    imageError(dataPokemon.sprites.other.showdown.front_default, dataPokemon.sprites.front_default);
    tipo1.innerHTML = dataPokemon.types[0].type.name;
    tipo1img.src = tipoParaImagem(dataPokemon.types[0].type.name);
    if(dataPokemon.types.length > 1){
    tipo2.innerHTML = dataPokemon.types[1].type.name;
    tipo2img.src = tipoParaImagem(dataPokemon.types[1].type.name);
    tipo2img.style.display = "inline";
    }
    else{
        tipo2.innerHTML ='';
        tipo2img.src = '';
        tipo2img.style.display = "none";
        
    }
    habilidade.innerHTML = dataPokemon.abilities[0].ability.name;
    pesoPokemon.innerHTML = (dataPokemon.weight / 10).toFixed(2) + "Kg";
    console.log(dataPokemon.weight)
    alturaPokemon.innerHTML = (dataPokemon.height / 10).toFixed(2) + "M";

    audioPokemon.src = dataPokemon.cries.latest;
    audioPokemon.play();
    musica.muted = false;

};

formNome.addEventListener("submit", (event) =>{
    event.preventDefault()
    showPokemon(input.value.toLowerCase())
})

btnA.addEventListener("click", (event) =>{
    event.preventDefault()
    if(idPoke > 1){
        idPoke -=1
        showPokemon(idPoke)
    }
})

btnB.addEventListener("click", (event) =>{
    event.preventDefault()
    idPoke++
    showPokemon(idPoke)

})

function playMusica(){
    musica.play();
}

showPokemon(idPoke);

