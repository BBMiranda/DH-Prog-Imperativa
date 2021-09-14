// 13/07/2021 - Prática Guiada

// Passo 3
/* Em um arquivo diferente, crie o objeto literal curso que tem como atributos: 
nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudante
s (um array composto pelos alunos criados no passo 1). */

// Passo 4
/* Crie o método que permite adicionar alunos à lista do curso, ou seja,
quando chamamos nosso método em nosso objeto curso, 
deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso. */

let alunos = require('./modulo_alunos')  // importando o class alunos e os estudantes

// classe curso
class curso {
    constructor(titulo, notaAprov, maxFaltas) {

        this.titulo = titulo
        this.notaAprov = notaAprov
        this.maxFaltas = maxFaltas
        this.listaAluno = []
// método para add lista de estudantes no "listaAluno"
        this.adicAluno = function () {
            for (let i = 0; i < alunos.estudantes.length; i++) {
                this.listaAluno.push(alunos.estudantes[i].nome)
            }
        }
    }
}

const curso1 = new curso ('CTD', 7, 5);

curso1.adicAluno();

// imprimindo a lista de alunos do curso
console.log(`Lista de alunos do ${curso1.titulo}: ${curso1.listaAluno.join(', ')}`);