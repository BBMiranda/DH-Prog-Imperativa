/* 
Micro desafio - Passo 1
Crie um objeto aluno que tenha como atributos: 
nome (string), 
quantidade de faltas (number) e 
notas (array de números). 
Crie um construtor para ele e importe-o como o módulo aluno. 
*/
function Alunos(nomes, faltas, notas) {
  this.nome = nomes;
  this.faltas = faltas;
  this.notas = notas;
/*Micro desafio - Passo 2
Nosso objeto aluno terá o 
método calcularMedia que retorna a média de suas notas.
Também terá um método chamado 
faltas, que simplesmente aumenta o número de faltas em 1. */
	this.calcularMedia=()=>{
		let resultado = this.notas.reduce((acumulador, item)=>acumulador+item)/this.notas.length;
		return resultado.toFixed(1); // toFixed serve para arredondar números.
	}
	this.adicionarFaltas=()=> this.faltas++ // ++ ou "+=1" adicionando +1 falta
}

modulo.exports = Alunos;

/* Micro desafio - Passo 3
Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do
curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de
estudantes (um array composto pelos alunos criados no passo 1). */