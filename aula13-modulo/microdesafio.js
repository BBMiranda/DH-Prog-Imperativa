/* Micro desafio - Passo 1
Crie um objeto aluno que tenha como atributos: nome (string), 
quantidade de faltas (number) e notas (array de números). 
Crie um construtor para ele e importe-o como o módulo aluno. */

/* Micro desafio - Passo 2
Nosso objeto aluno terá o método calcularMedia que retorna a 
média de suas notas. Também terá um método chamado faltas, 
que simplesmente aumenta o número de faltas em 1. */

/* Micro desafio - Passo 3
Em um arquivo diferente, crie o objeto literal curso que tem 
como atributos: nome do curso (string), nota de aprovação (number), 
faltas máximas (number) e uma lista de estudantes (um array composto 
pelos alunos criados no passo 1). */

/* Micro desafio - Passo 4
Crie o método que permite adicionar alunos à lista do curso, 
ou seja, quando chamamos nosso método em nosso objeto curso, 
deverá adicionar um aluno a mais na propriedade lista de 
estudantes do objeto curso. */



const estudantes = require('./modulos/estudante')

let novoEstudante = new estudantes("Joao", 1, [9,9,9,9,10]);
let media = novoEstudante.media(novoEstudante.notas);
let faltas = novoEstudante.aumentarFaltas(novoEstudante.faltas);
console.log(novoEstudante)

console.log(media)
console.log(faltas)