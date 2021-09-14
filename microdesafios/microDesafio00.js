// Micro Desafios - Teste!
// Aula 26/05/2021 - Desafio IMC com variável

let nome = "Bruno";
let idade = 36;
let altura = 1.76;
let peso = 89.9

const valorIMC = (peso / (altura^2)); // (peso / (altura * altura));

//utilizar ` acento crase / .toFixed() - limita o valor em duas casas depois do ponto.`
resultado = `${nome} tem ${idade} anos e o seu IMC é ${valorIMC.toFixed(2)}.`
//console.log("O IMC do "+ nome + " é " + valorIMC)
console.log(resultado)
