fetch("./JSON/data.json")
    .then(Response => Response.json())
    .then(data => {
       let lista = document.getElementById("lista");

        data.Pessoas.forEach( obj => {
        
        const listItem = document.createElement("li");

        listItem.innerHTML = 
    `Nome: ${obj.nome}<br><br>` +
    `Idade: ${obj.idade}<br><br>` +
    `Humor: ${obj.humor}<br><br>` +
    `CPF: ${obj.cpf}<br><br>` +
    `Telefone: ${obj.telefone}`;

        lista.appendChild(listItem);


        })
    })
    .catch(error => console.error('Erro ao carregar o arquivo JSON:', error)); 