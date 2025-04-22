function validaBusca(){
    if(document.querySelector("#inputlupa").value == ""){
        alert("Nao deixe a busca em branco!");
    }
    return false;
}

document.querySelector("#Form-busca").onsubmit = validaBusca;