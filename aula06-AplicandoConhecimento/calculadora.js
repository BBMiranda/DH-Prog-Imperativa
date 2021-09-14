// Integrantes Grupo:
// Alexander Bandeira, Bruno B. Miranda, 
//Edilson Emanuel, Raquel Teixeira  

// Calculadora - Nível 1
function adicionar(valorA, valorB) {
  return valorA + valorB;
}
console.log(adicionar(3, 2))

function subtracao(valorA, valorB) {
  return valorA - valorB;
}

function multiplicacao(valorA, valorB) {
  return valorA * valorB;
}

function divisao(valorA, valorB) {
  return valorA / valorB;
}

// Calculadorea - Nível 02
console.log("---------Teste de Operações/Calculadora---------")
console.log(adicionar(2,2));
console.log(subtracao(5, 3));
console.log(multiplicacao(4,4));
console.log(divisao(8,0));


// Calculadora - Nível 03
//1.
function quadradoDoNumero(valorA) {
  return Math.pow(valorA, 2)
}

function quadradoDoNumero(valorA) {
  return multiplicacao(valorA, valorA);
}

//2.
function mediaDeTresNumeros(valorA, valorB, valorC) {
  let total = (valorA + valorB)+valorC 
  return divisao(total, 3)
}
console.log(mediaDeTresNumeros(5,5,5,))
//---------------------------------------------------
function mediaDeTresNumeros(valorA, valorB, valorC) {
  let total = adicionar(valorA, valorB) + valorC
  return divisao(total, 3)
}
console.log(mediaDeTresNumeros(8,4,3));

//3.
function calculaPorcentagem(valorA, valorB) {
  let total = multiplicacao(valorA, valorB)
  return divisao(total, 100)
}
console.log(calculaPorcentagem(300,15))

//4.
function geradorDePorcentagem(valorA, valorB) {
  let total = divisao(valorA, valorB)
  return multiplicacao(total, 100)
}
console.log(geradorDePorcentagem(2, 200))




