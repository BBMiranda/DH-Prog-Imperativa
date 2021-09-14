eParOuImpar = 108;

if (eParOuImpar % 2 === 0) {
  console.log('É par')
} else {
  console.log('É impar')
}

eParOuImpar = 107;
let resultado = eParOuImpar % 2 === 0 ? 'É par' : 'É impar';
console.log(resultado)

function declarativa() {

}

let expressa = function() {

}

let seta = () => ''

var objeto = {
  nome: 'Rodrigo',
  sobrenome: 'Sarri',
  nomeCompleto: function() {
    return `O nome completo é: ${this.nome} ${this.sobrenome}`
  }
}

console.log(objeto.nomeCompleto());

let soma = (valorA, ValorB) => valorA + ValorB;

let subtracao = (valorA, valorB) => {
  return valorA - valorB;
}

console.log(soma(8,5));

let texto = "ESSE É UM TEXTO SIMPLES";
console.log(texto.toUpperCase());

let cores = Array('Azul', 'Vermelho', 'Verde');

let frutas = [
  'Maça',
  'Banana',
  'Tomate',
  'Melão'
];

console.log(frutas.sort());

let valor = 50;
let inicial = 0;

for (let i = inicial; i >= valor; i+= 5) {
  console.log(i)
}