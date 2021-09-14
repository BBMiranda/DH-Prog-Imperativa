// Micro Desafios - Etapa II
// Aula 02/06/2021 

/* 1) Em um parque de diversões nos pedem um programa para verificar se os 
passageiros da montanha-russa podem entrar no brinquedo.

Crie uma função podeSubir() que receba dois parâmetros: 
altura da pessoa;
se está acompanhada.

Deve retornar um valor booleano (TRUE, FALSE) que indique se a pessoa 
pode subir ou não, baseado nas seguintes condições:

a) A pessoa deve medir mais de 1.40m e menos de 2 metros.
b) Se a pessoa medir menos de 1.40m, deverá ir acompanhada.
c) Se a pessoa medir menos de 1.20m, não poderá subir, nem acompanhada. */


// Modo 1


// Função if...else usando os parâmetros 'altura' e 'acompanhada'
function podeSubir(altura, acompanhada) {
    if(altura > 1.4 && altura < 2) {
        console.log("Pode subir!"); 
    } else if((altura >= 1.2 && altura <=1.4 )&& acompanhada == true) {
        console.log("Acesso autorizado somente com acompanhante.")
    } else {
        console.log("Acesso negado.");
    }
}
// Chamando a Função 'podeSubir'
podeSubir(1.60, false);
podeSubir(1.55, true);
podeSubir(1.18, true);
podeSubir(1.35, true);
podeSubir(1.38, false);
podeSubir(2.01, true);

console.log("\n");
//Modo 2

// // Função if...else usando os parâmetros 'altura' e 'acompanhada'e variavel 'verificacao'.
function podeSubir1(altura, acompanhada ) {
    let verificacao = false;
    if (altura >= 1.4 && altura < 2) {
        verificacao = true;
        console.log("\n Pode subir!"); 
    } else if ((altura >= 1.2 && altura <=1.4 )&& acompanhada == true) {
        verificacao = true;
        console.log("\n Acesso autorizado somente com acompanhante.")
    } else {
        verificacao=false;
        console.log("\n Acesso negado.");
    }
    return verificacao;   
}
// Impressão do resultado no console.
console.log(podeSubir1(1.19, true));
console.log(podeSubir1(1.75, false));
console.log(podeSubir1(1.35, true));

console.log("\n");
/* 2) Crie um algoritmo utilizando switch que receba uma string 
e tenha 5 situações: 

Situação 1 – Caso na string esteja escrito “Verão”, deve exibir no console a mensagem: 
“Que calor hein?!”. 

Situação 2 – Caso na string esteja escrito “Inverno”, deve exibir no console a mensagem: 
“Frio dms!”. 

Situação 3 – Caso na string esteja escrito “Outono”, deve exibir no console 
a mensagem: 
“É a estação em que as folhas caem”. 

Situação 4 – Caso na string esteja escrito “Primavera”, deve exibir no console a mensagem: 
“O momento em que as flores crescem”.Situação 

5 – Caso não se aplique nenhuma das opções acima, deve exibir no console a mensagem: 
“Ops, estação inválida”. */

// Variável 
let estacao = "Outono";

switch(estacao) {
    case "Verão":
        console.log("Que calor hein?!");
        break;
    case "Inverno":
        console.log("Frio dms!");
        break;
    case "Outono":
        console.log("É a estação em que as folhas caem.");
        break;
    case "Primavera":
        console.log("O momento em que as flores crescem.");
        break;
    default:
        console.log("Ops, estação inválida.");
};

