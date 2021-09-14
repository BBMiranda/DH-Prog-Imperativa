/* ==========================
ATRIBUIÇÃO
========================== */

// O operador "=" serve para atribuir o valor 40 a
// uma variável chamada "idade" 
let idade = 40

/* ==========================
ARITMÉTICOS
========================== */
// Nos permitem fazer operações matemáticas

10 + 15 // ---> Soma
10 - 15 // ---> Subtração
10 * 15 // ---> Multiplicação
10 / 15 // ---> Divisão
15++    // ---> Incremento de um em um: 15 + 1
15--    // ---> Decremento de um em um: 15 - 1
15 % 5  // ---> Módulo. O resto obtido da divisão de 15 por 5: 0 
15 % 2  // ---> Módulo. O resto obtido da divisão de 15 por 2: 1

/* ==========================
COMPARAÇÃO SIMPLES
========================== */

//Comparação Simples
// COmparam dois valores e devolvem verdadeiro ou falso.

function comparacaoSimples(valorA, valorB) {
  //return valorA == valorB; // Igualdade -> Falso
  return valorA != valorB; // Desigualdade -> Verdadeiro
}
console.log(comparacaoSimples(10, 15));



/* No primeiro caso, o valor é 10 em ambos os casos, mas os tipos de dados são
número e string. Como estamos comparando que ambos (valor e tipo de
dados) são iguais, o resultado é falso. */


/* ==========================
COMPARAÇÃO ESTRITA
========================== */

//Comparação Estrita
//Comparam o valor e o tipo de dado também.
function comparacaoEstrita(valorA, valorB) {
  //return valorA === valorB; // Igualdade estrita -> Falso
  return valorA !== valorB; // Desigualdade estrita -> Verdadeiro
}
console.log(comparacaoEstrita(10,"10"));
//console.log(comparacaoEstrita(10, 15));

/* ==========================
OPERADORES RELACIONAIS
========================== */


/* ==========================
LÓGICOS
========================== */


// Permitem combinar valores booleanos e seu resultado ao mesmo
// tempo, também é um booleano


