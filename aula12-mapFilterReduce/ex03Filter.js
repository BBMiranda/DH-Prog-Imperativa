//  Aula 12 - 30/06/2021
// ex03Filter.js
/* O método filter() -> cria um array preenchido com todos os elementos 
que passam em um teste (fornecido uma função) */

// objetivo: filtrar de acordo com uma condição
const numeros = [1, 2, -3, 4, 5, 0, 7, 8, 9, 19];

const numerosMaiores = numeros.filter(item=>item>0);

console.log(numerosMaiores);