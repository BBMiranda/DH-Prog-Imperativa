
const operacoes=require('./modulos/exportaCalculadora')

function calcula(a,b,acao) {
    switch (acao) {
        case '+': console.log(operacoes.soma(a,b));
        break;
        case '-': console.log(operacoes.subtrai(a,b));
        break;
        case '/': console.log(operacoes.divide(a,b));
        break;
        case '*': console.log(operacoes.multiplica(a,b));
        break;
        case 'c': console.log("Digite uma opção válida");
        break;
    }
}


calcula(1,4,'c');


