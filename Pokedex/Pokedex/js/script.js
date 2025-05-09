// Seleciona os elementos do DOM relacionados aos tipos do Pokémon
const tipo1 = document.querySelector("#tipo1");
const tipo2 = document.querySelector("#tipo2");

// Seleciona a imagem do Pokémon
const imgPokemon = document.querySelector("#pokeImg");

// Seleciona os elementos para exibir ID e nome do Pokémon
const idPokemon = document.querySelector("#idPokemon");
const nomePokemon = document.querySelector("#nomePokemon");

// Seleciona os elementos para exibir peso, habilidade e altura
const pesoPokemon = document.querySelector("#peso");
const habilidade = document.querySelector("#habilidade");
const alturaPokemon = document.querySelector("#altura");

// Seleciona o campo de entrada e o formulário
const input = document.querySelector("#inputForm");
const formNome = document.querySelector("#form");

// Seleciona os botões de navegação (voltar e próximo)
const btnA = document.querySelector("#btnVoltar");
const btnB = document.querySelector("#btnProximo");

// Seleciona os elementos de áudio
const audioPokemon = document.querySelector("#audioPokemon");
const tipo1img = document.querySelector("#TI1");
const tipo2img = document.querySelector("#TI2");

// Música de fundo
const musica = document.querySelector("#intro");

// Inicializa o ID do Pokémon atual como 1
let idPoke = 1;

document.addEventListener("click", () => { //Função para que o audio de fundo toque quando o usuario interagir com a pagina 
    musica.muted = false;
    musica.play();
}, { once: true });

// Função que busca os dados do Pokémon na API
const fetchPokemon =  async (pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await APIresponse.json()
    return data
};

// Função para tentar carregar uma imagem GIF; se der erro, carrega a imagem PNG
function imageError(linkGif, linkImg){
    imgPokemon.src = linkGif;

    imgPokemon.onerror = function(){
        this.onerror = null;
        this.src = linkImg;
    };
    return;
};

// Função que retorna o caminho da imagem do tipo do Pokémon
const tipoParaImagem = (tipo) => {
    return `img/types/${tipo}.png`;
};

// Função assíncrona que exibe os dados do Pokémon na interface
const showPokemon = async (pokemon) => {
    const dataPokemon = await fetchPokemon(pokemon); // Obtém os dados da API

    // Atualiza o ID do Pokémon atual
    idPoke = dataPokemon.id;

    // Exibe ID e nome
    idPokemon.innerHTML = dataPokemon.id;
    nomePokemon.innerHTML = dataPokemon.name.toUpperCase();

    // Mostra a imagem do Pokémon com fallback em caso de erro
    imageError(dataPokemon.sprites.other.showdown.front_default, dataPokemon.sprites.front_default);

    // Exibe os tipos
    tipo1.innerHTML = dataPokemon.types[0].type.name;
    tipo1img.src = tipoParaImagem(dataPokemon.types[0].type.name);

    // Verifica se há um segundo tipo
    if(dataPokemon.types.length > 1){
        tipo2.innerHTML = dataPokemon.types[1].type.name;
        tipo2img.src = tipoParaImagem(dataPokemon.types[1].type.name);
        tipo2img.style.display = "inline"; // Mostra imagem do segundo tipo
    } else {
        tipo2.innerHTML = '';
        tipo2img.src = '';
        tipo2img.style.display = "none"; // Esconde imagem do segundo tipo
    }

    // Exibe habilidade, peso e altura
    habilidade.innerHTML = dataPokemon.abilities[0].ability.name;
    pesoPokemon.innerHTML = (dataPokemon.weight / 10).toFixed(2) + "Kg";
    console.log(dataPokemon.weight);
    alturaPokemon.innerHTML = (dataPokemon.height / 10).toFixed(2) + "M";

    // Define o som do Pokémon e inicia a reprodução
    audioPokemon.src = dataPokemon.cries.latest;
    audioPokemon.play();
};

// Evento de envio do formulário: busca Pokémon pelo nome ou número
formNome.addEventListener("submit", (event) =>{
    event.preventDefault();
    showPokemon(input.value.toLowerCase());
})

// Evento do botão de voltar: mostra o Pokémon anterior
btnA.addEventListener("click", (event) =>{
    event.preventDefault();
    if(idPoke > 1){
        idPoke -= 1;
        showPokemon(idPoke);
    }
})

// Evento do botão de próximo: mostra o próximo Pokémon
btnB.addEventListener("click", (event) =>{
    event.preventDefault();
    idPoke++;
    showPokemon(idPoke);
})

// Função para iniciar a música de fundo
function playMusica(){
    musica.play();
}



// Chama a função para exibir o primeiro Pokémon ao carregar a página
showPokemon(idPoke);