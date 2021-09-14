// aula 12 - 06/07/2021
// ex02Filter.js
// filter() é um método que retorna um novo array,
// com os elementos que atendem uma condição 

const numeros = [1,2,-3,4,-5,0,7,8,9,19];

const numerosMaiores = numeros.filter(elemento=>elemento>5);

console.log(numerosMaiores);