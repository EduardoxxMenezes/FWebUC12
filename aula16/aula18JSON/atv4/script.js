fetch("./JSON/data.json")
 .then(Response => Response.json)
 .then(data => {
    let materias = document.getElementById("materias");

    Object.keys(data).forEach(materia => {
        let li = document.createElement("li");
        let texto = materia + ": ";
    materia.forEach(obj => {
     texto += obj + ', ';

        
     })
     li.textContent = texto;
     materias.appendChild(li);
    })
})
