// Aula 03 - 31/05/2021
// ex03.js
// Definindo uma função
function minhaFuncao1() {
    console.log("Minha Primeira Função") // Código para ser executado
}
// Chamando a função
minhaFuncao1();

//Definindo uma função
function bemVindo(nome, sobrenome) {
    return 'Olá ' + nome + ' ' + sobrenome;
}
// Chamando a função
console.log(bemVindo()); // retornará 'Olá undefined undefined'