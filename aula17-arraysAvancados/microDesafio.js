// 1º
let pares = [2, 4, 6, 8, 10];

let impares = pares.map(function(valor){
  return valor - 1;
});
console.log(impares);

// 2º
let nomes = ["Bruno", "Eduardo", "Maria", "Herick", "Tiago", "Maria"];

let filtroNomes = nomes.filter(function(nome){
  return nome === "Maria";
});
console.log(filtroNomes);

// 3º
let numeros = [1, 5, 9, 3, 7];

/* let string = numeros.reduce(
  ( acumulador, valorAtual ) => acumulador + " - " + valorAtual,
);
console.log(string); */

let string = numeros.reduce(function(acumulador, valorAtual){
  return acumulador + " - " + valorAtual;
})
console.log(string);

// 4º 
let animais = ["cachorro", "gato", "elefante", "galinha"];

animais.forEach(function(valor, index){
  console.log(`O animal é ${valor.toUpperCase()} e se encontra no indice: ${index}`)
});
