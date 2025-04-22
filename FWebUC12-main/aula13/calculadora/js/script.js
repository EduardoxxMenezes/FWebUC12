let textValue = "";
let input = document.querySelector("#inputText");

function addNumber(number){
    textValue += number;
    updateText();
}

function addOperator(Operator){
    textValue += Operator;
    updateText();
}

function addDecimal(){
    textValue += ".";
    updateText();
}
function piada(){
    let a = Math.floor(Math.random()*4);
    if(a == 1){
        textValue = "Qual o bicho que tem mais de 3 e menos de 4 olhos? o π olho."
    }else if(a == 2){
        textValue = "Como se faz para piorar? Leva o π para a igreja e dá ⅓"
    }else if(a == 3){
        textValue = "O que o MMC estava fazendo no pé da escada? Esperando o MDC."
    }
    updateText();
}
function removeNumber(){
    textValue = input.value.slice(0,-1);
    updateText();
}

function clearText(){
    textValue = "";
    updateText();
}

function updateText(){
    input.value = textValue;
}

function calculate(){
    textValue = eval(textValue);
    updateText();
}


function carregar(){

}