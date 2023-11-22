let maria = 2;
let joao = 1;

function getMaria(){
    return maria;
}
function setMaria(valor){
    maria = valor;
}

function getJoao(){
    return joao;
}
function setJoao(valor){
    joao = valor;
}
function deJoaoParaMaria(){
    maria = joao + maria;
    joao = 0;
}
function deMariaParaJoao(){
    joao = joao + maria;
    maria = 0;
}