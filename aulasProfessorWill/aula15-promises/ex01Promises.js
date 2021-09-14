// Aula 15 - Promises - 20/07/2021
/*
1) O que são Promises?
R.: Um objeto Javascript que vincula: 
a) A produção do código.
b) O consumo de código.
*/

function meuVerificador(resposta) {
    console.log(resposta);
}

let minhaPromessa = new Promise(
    function (Resolve, Reject) {
        let x = 10;
        if (x == 0) {
            Resolve("Tudo OK");
        } else {
            Reject("Deu Erro");
        }
    }
);

minhaPromessa.then(
    function (Resolve) {
        meuVerificador(Resolve);
    }).catch((Reject) => {
    console.log(Reject)
});


