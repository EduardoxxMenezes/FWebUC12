alert("BEM VINDOS A INTERATIVIDADE 24 1T");

let titulo = document.querySelector("#titulo");

titulo.textContent = "novo texto";
titulo.style.color = "red";

function mostrarAlerta(){
    alert("Funciona!");
}

titulo.onclick = mostrarAlerta;