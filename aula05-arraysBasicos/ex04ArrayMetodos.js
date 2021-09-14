// Aula 05 - 07/06/2021

// Array - Método Push --> Inserir elementos no final do Array!
let cores = ["Azul", "Branco", "Vermelho", "Verde"];
console.log(cores);
// .push()
cores.push("Violeta", "Amarelo")
console.log(cores);

// Array - Método Pop --> Retirar o último elementos do Array!
let cores = ["Azul", "Branco", "Vermelho", "Verde"];
console.log(cores);
console.log(cores.length);
// .pop()
let ultimoElemento = cores.pop();
console.log(cores);
console.log(ultimoElemento)
// .shift()
let cores = ["Roxo", "Laranja", "Azul"];
let primeiraCor = cores.shift()
console.log(cores) // ["Laranja", "Azul"]
console.log(primeiraCor) // Roxo
// .unshift()
let cores = ["Roxo", "Laranja", "Azul"];
cores.unshift("Violeta"); // Retorna 4
console.log(cores); // ["Violeta", "Roxo", "Laranja", "Azul"]
cores.unshift("Cinza", "Ouro"); // Retorna 6
console.log(cores); // ["Cinza", "Ouro", "Violeta", "Roxo", "Laranja", "Azul"]
