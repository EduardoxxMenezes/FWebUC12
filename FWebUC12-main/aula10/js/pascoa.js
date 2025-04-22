let botao = document.getElementById("button");
let coelho = document.getElementById("coelho");
let audio = new Audio('/aulas/aula10/js/audio.mp3');


botao.onclick = function(){
  
    coelho.style.opacity = "1";
    coelho.style.width = "100%";
    coelho.style.height = "700px";
        audio.play();
}
