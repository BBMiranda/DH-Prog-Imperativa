// Aula 05 - 07/06/2021
// Exercício "Lista de Compras Array"
// x join, x pop, x push, x shift,  x unshift

let listaDeCompras = ["Arroz", "Feijão", "Ovo", "Carne"];

let separadoPorVirgulas = listaDeCompras.join();
console.log("Join = Junta os elementos de um array usando um separador especificado.");
console.log(separadoPorVirgulas);

let ultimoItem = listaDeCompras.pop();
console.log("Pop = Elimina o último elemento de um array.");
console.log(listaDeCompras);
console.log(ultimoItem);

listaDeCompras.push("Farinha");
console.log("Push - Adiciona um ou mais elementos ao final do array.");
console.log(listaDeCompras);
listaDeCompras.push("Palmito");
console.log(listaDeCompras);

let primeiroItem = listaDeCompras.shift();
console.log("Shift = Elimina o primeiro elemento de um array.");
console.log(listaDeCompras);
console.log(primeiroItem);

listaDeCompras.unshift("Cerveja");
console.log("UnShift = Adiciona um ou mais elementos ao início de um array.");
console.log(listaDeCompras);
listaDeCompras.unshift("Picanha");
console.log(listaDeCompras);