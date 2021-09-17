// Transforme as seguintes funções em arrow functions:

/* function print(mensagem) {
  console.log(mensagem);
}
print("Olá, bom dia"); */

let print = mensagem => {
  console.log(mensagem);  
}
print("Olá, bom dia");

/* function soma(numeroA, nummeroB) {
  return numeroA + numeroB;
}

console.log(soma(10, 10)); */

let soma = (numeroA, nummeroB) => numeroA + nummeroB;

console.log(soma(10,10))

/* let soma = (numeroA, numeroB) => {  
  return numeroA + numeroB;
}
console.log(soma(10,10)) */