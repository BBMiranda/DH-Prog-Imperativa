// Micro Desafios - Etapa I
// Aula 31/05/2021 

/* 1) Criar a função calcularIndiceDeMassaCorporal 
que receba a altura em centímetros e o peso em quilogramas 
e calcule o IMC do usuário (peso / altura2). 
Em seguida, execute a função testando diferentes valores. */

// Desafio IMC

// Variáveis
let nome = "Bruno";
let nome1 = "Eduardo";
let nome2 = "Herick";
// Função
function IMC(peso, altura) {
    return (peso / (altura * altura));
}
// Resultado impresso no console
console.log("Imc de " + nome + " é " + IMC(90, 1.76).toFixed(2));
console.log("Imc de " + nome1 + " é " + IMC(116, 1.75).toFixed(2));
console.log("Imc de " + nome1 + " é " + IMC(85, 1.81).toFixed(2));

console.log("\n");
/*2) Criar as 4 “function expression” (dentro de variáveis) básicas de uma calculadora:

Soma;
Subtração;
Multiplicação;
Divisão. */

// Desafio Operações Matemáticas 

// Função expressa = aquela que se atribui como valoar à uma variável.
let somar = function (numA, numB) {
    return numA + numB
};

let subtracao = function (numA, numB) {
    return numA - numB
};

let divisao = function (numA, numB) {
    return numA / numB
};

let multiplicacao = function (numA, numB) {
    return numA * numB
};

// Resultado impresso no console
console.log("Soma = " + somar(10,15))
console.log("Subtração = " + subtracao(10,15))
console.log("Divisão = " + divisao(10,15).toFixed(2))
console.log("Multiplicação = " + multiplicacao(10,15).toFixed(2))

console.log("\n");
/* 3) Criar as variáveis, nomeJogador, golsJogador, precoEmDolares. 
Depois, criar a função fazerGol que incremente a quantidade de gols do jogador 
em uma unidade e, em seguida, imprima em tela a mensagem “GOL!!!!!!!!!”. 
Além disso, incremente o valor do jogador em 10.000 dólares. 
Por conseguinte, teste a execução da função várias vezes 
e imprima em tela a nova quantidade de gols do jogador 
e o preço do jogador no mercado. */

// Desafio GOL!!!!!

// Variáveis 
let nomeJogador = "Ronaldo"
let golsJogador = 100
let precoEmDolares = 10000

// Função 
let fazerGol = function() {
    golsJogador ++;
    precoEmDolares = precoEmDolares + 10000;
    console.log("GOL!!!!!!!!!!")
// Por boas práticas utilizar => ` crase ` e ${variável}.
		return console.log(`O Jogador ${nomeJogador} fez seu ${golsJogador} gols pelo time. Seu preço atual no mercado é de $ ${precoEmDolares} `) ;
}

fazerGol()
fazerGol()
fazerGol()

console.log("\n");

/* 4) Criar a função hatTrick (expressão usada para dizer 
que um jogador fez 3 gols em uma mesma partida) que em seu interior 
execute três vezes a função fazerGol e, em seguida, 
aumente o valor do jogador em 10% a mais por ano 
em comparação com o valor atual. */

// Desafio hatTrick!!!!!

// Função 
function hatTrick() {
	fazerGol();
	fazerGol();
	fazerGol();
// Preço em Dolares 10%! 1.1 = +10% no valor do jogador.
	precoEmDolares = precoEmDolares * 1.1; 
	return console.log(`\n O jogador ${nomeJogador} fez um hatTrick e seu valor é de $ ${precoEmDolares}.`);
};
hatTrick();





