// .slice()
// array.slice(inicio, fim);
let numeros = [3, 4, 5, 6, 7];
let subArray = numeros.slice(0, 3);
console.log(subArray); // [3, 4, 5]

// .splice()
//array.splice(inicio, quantidade, item1, item2, ...);
// Indicamos o inicio, itens a serem removidos
// e os itens que serão adicionados.
let numerosA = [3, 4, 5, 6, 7];
numerosA.splice(0, 0, 2);
console.log(numerosA); //[2,3,4,5,6,7]
numerosA.splice(1, 2);
console.log(numerosA); // [2,5,6,7]

// .sort()
// Ajuda a ordenar os elementos de um array.
//array.sort(); // ordenar com posição de valor Unicode
//array.sort(callback); // a callback com parâmetros

let marcas = ["Samsung", "Xiaomi", "Apple"];
console.log(marcas.sort()); // ["Apple", "Samsumg", "Xiaomi"]

let numerosB = [10, 3, 4, 52, 6, 7];

let numerosOrdem = numerosB.sort(function(a,b){
  return a-b;
});
console.log(numerosOrdem)

// .flat()
// array.flat(); //parâmetro omitido
// array.flat(n); //parâmetro definido. Nível n.
let numerosC = [1, 2, 3, [4], [[5, 6]]];
let novoArray = numerosC.flat();
let novoArrayA = numerosC.flat(2);
console.log(novoArray);
console.log(novoArrayA);

// .includes()
// array.includes(elemento, inicio);
// indicamos o elemento a buscar 
// e a posição que começara a busca
let numerosD = [3, 4, 5, 6, 7];
let nomesA = ["Bruno", "Barros", "Miranda", "AnDWiN"];

//let existeD = numerosD.includes(4); //true
let existeD = numerosD.includes(4, 2); //false
let existeA = nomesA.includes("AnDWiN"); // true
console.log(existeD);
console.log(existeA);

// .find() 
//array.find(callback(elemento, indice, array));
//indicamos o elemento a buscar;
// e a posição que irá começar
let moedas = [
  {nome: "Bitcoin", simbolo: "BTC"},
  {nome: "Ethereum", simbolo: "ETH"},
  {nome: "Cardano", simbolo: "ADA"},
];
let cripto = moedas.find(
  function(moeda) {
    return moeda.simbolo === "Bitcoin";
  }
);
console.log(cripto)
