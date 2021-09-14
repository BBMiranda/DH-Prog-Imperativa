/* if...else são estruturas condicionais que executam afirmação dentro do bloco
se determinada condição for verdadeira, se for falsa executa a afirmação dento do else. */

// Validações I
// if...else com uma variável
let dia = "quarta";

if(dia == "domingo") {
    console.log("Vou para praia!");
} else if(dia == "sexta") {
    console.log("Vou para o cinema!");
} else if(dia == "segunda") {
    console.log("Vou tomar um café")
} else {
    console.log("Fico em casa!");
}; 

console.log('\n');

/* if...else com duas variáveis e incrementando com && "and" => ambas condições
precisam ser verdadeiras. */

let dia1 = "domingo";
let clima = "ensolarado";

if (clima == "ensolarado" && dia1 == "domingo") {
    console.log("Vou passear na praça!");
} else if (clima == "nublado" && dia1 == "sábado") {
    console.log("Vou ao cinema!");    
} else {
    console.log("Vou ficar em casa!");
};

console.log('\n');

// if...else com variante ' ' em branco sendo preenchida.
let idade = 15;
let acesso = '';
if (idade < 16) {
    acesso = 'Acesso proibido';
} else if (idade >= 16 & idade <= 18) {
    acesso = 'Acesso liberado somento com acompanhante maior de idade';
} else {
    acesso = 'Acesso liberado';
};
console.log(acesso);

// Validações 2

// if ternário
// Exemplo 01
let oMaior = 4 > 10 ? "O 4 é maior" : "O 10 é maior";
//           4 > 10 é a condição
//           O 4 é maior é a primeira expressão 
//           O 10 é maior é a segunda expressão
console.log(oMaior); // O 10 é maior


// Exemplo 02
let dia = "domingo";

let resultado = dia == "domingo" ? "Vou para praia." : "Fico em casa."
              // condição         // verdadeiro (if) : falso (else).  
console.log(resultado);

// Exemplo 03
let pedidoDeEmprestimo = true;
let rendaMensal = 2100;

console.log(
    // condição
    pedidoDeEmprestimo && rendaMensal >= 2500 
    ?
    //verdadeiro
    'Empréstimo liberado'
    :
    //falso
    'Infelizmente não podemos liberar seu empréstimo'
);


//switch 
// Exemplo 01
let dia1 = "sexta";

switch (dia1) {
    case "segunda":
        console.log("Vou tomar café");
        break;
    case "quarta":
        console.log("Vou no cinema");
        break;
    case "terça":
        //implementa o que deverá ser feito.
        break;
    default: //bloco default
        console.log("Eu não vou fazer nada")
};

// Exemplo 02
let idade = 5;

switch (idade) {
    case 10:
        console.log('Tem 10 anos');
        break;
    case 5:
        console.log('Tem 5 anos');
        break;
};

// Exemplo 03
let fruta = 'wefwef';

switch (fruta) {
    case 'banana':
        console.log("Uma fruta amarela");
        break;
    case 'laranja':
        console.log("Uma fruta laranja");
        break;    
    default:
        console.log("Qual fruta é?");
        break;    
};