const produto = function(a, b){
    return a*b;
};
console.log(produto(2,3));

const soma = function(a,b){
    return a+b;
}
function divisao(a,b){
    return a/b;
}

console.log(soma(2,3));
let operacao = divisao;
console.log(operacao(6,3));