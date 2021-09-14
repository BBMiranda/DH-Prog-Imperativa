//ex09Flat.js
// Flat = plano
/* Este método é feito para "desembrulhar" sub-arrays dentro de array,
ou seja, ele não modifica o array original */

let numeros = [1,2,3,[4,5] ];
console.log(numeros);
novoArray =numeros.flat(2);
console.log(novoArray);