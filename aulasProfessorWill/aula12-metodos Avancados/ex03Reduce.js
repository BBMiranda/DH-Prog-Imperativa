// aula 12 - 06/07/2021
// ex03Reduce.js
// reduce é um método que pecorre o array e 
// retorna um único valor. Ele acumula o resultado.

const numeros = [1,2,-3,4,-5,0,7,8,9,19];
let resultado = numeros.reduce(
    function(totalizador,elemento) {
      return totalizador+elemento;  
    }
);
console.log(resultado);