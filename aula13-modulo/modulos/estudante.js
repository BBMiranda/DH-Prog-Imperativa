let aluno = {
    nome:"Junior",
    faltas: 3,
    notas: [7,8,9,10,11,12]
}

let alunosConstrutor = function Alunos(nome, faltas, notas){
    this.notas = notas,
    this.nome = nome,
    this.faltas = faltas,
    this.media = function(array){
        let soma = array.reduce((a,b)=> {
            return a + b;
        })
        return soma / notas.length
    }
    this.aumentarFaltas = function(){
        return faltas = faltas+1;
    }
}
    
module.exports = alunosConstrutor; 