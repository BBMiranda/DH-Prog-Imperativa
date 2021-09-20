/* const somar = (numeroA, numeroB) => numeroA + numeroB;

const calculadora = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB);


console.log(calculadora(50, 10, somar));
console.log(calculadora(100, 25, (numeroA, numeroB) => numeroA - numeroB)); */


/* function nomeCompleto(nome, sobrenome) {
  //return nome + " " + sobrenome; 
  return nome[0] + sobrenome [0];
};

function bomDia(nome, sobrenome, callback){
  return "Olá, " + callback(nome,sobrenome);
};

bomDia("Amanda", "Ferreira", nomeCompleto)
//Olá, Amanda Ferreira
console.log(bomDia("Amanda", "Ferreira", nomeCompleto)) */


function acaoCarro(callback){
  return callback();
}

function andar() {
  return "o carro está andando";
}

function parar() {
  return "o carro parou";
}

console.log(acaoCarro(andar))
console.log(acaoCarro(parar))
