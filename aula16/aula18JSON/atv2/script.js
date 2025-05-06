let nome = "";
let cidade = "";

fetch("./JSON/data.json")
    .then(Response => Response.json())
    .then(listaPessoas => {
        
          nome1 = listaPessoas.pessoas[0].nome
          cidade = listaPessoas.pessoas[0].local.cidade
          console.log(nome1)
document.getElementById("demo").innerHTML = "Primeiro Registro do array contém dados de <b>\"" + nome1 + "\"</b> de <b> \"" + cidade + "\" </b>"
    })
