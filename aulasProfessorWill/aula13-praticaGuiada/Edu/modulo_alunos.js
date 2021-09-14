// 13/07/2021 - Prática Guiada


// Passo 1
/* Crie um objeto aluno que tenha como atributos: nome (string), 
 quantidade de faltas (number) e notas (array de números). 
 Crie um construtor para ele e importe-o como o módulo aluno. */

// Passo 2
/*  Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. 
 Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. */

 class aluno {
    constructor (nome,faltas,notas) {
        this.nome = nome
        this.faltas = faltas
        this.notas = notas

        this.calcularMedia = function () {
            const resultado = (this.notas.reduce((sum,n) => sum+=n, 0))/this.notas.length
            return `O aluno ${nome} possui uma média de ${resultado}`
        }
        this.adicFaltas = function (){
            this.faltas++
            return `O aluno ${nome} está com ${this.faltas} faltas`
        }
    }
}

const estudantes = [ 
    new aluno ('Joaquim',10,[7,8,9,5,10]),
    new aluno ('Irineu',2,[8,5,9,10,10])
]

// textando a criação dos alunos no array
/* console.log(estudantes[0].adicFaltas());
console.log(estudantes[1].calcularMedia()); */

// exportando a criação de alunos e seus dados
module.exports = {aluno,estudantes}