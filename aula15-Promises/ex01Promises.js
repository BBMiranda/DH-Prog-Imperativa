// Data: 12/07/2021
// Aula 15 - Promises
// O que são Promises ?
// É um objeto JavaScript que vincula:
// 1 - A produção de código
// 2 - O consumo de código
// Propriedade do Objeto Promise
// Pendente / Realizada / Rejeitada

function meuVerificador(resposta) {
    console.log(resposta);
}

let minhaPromessa = new Promise(
	function (Resolve, Reject) {
		let x = 0;
    if (x == 0) {
      Resolve("Tudo OK")
		} else {
			Reject("Deu Erro")		
    }
  }
);
minhaPromessa.then(
	function(Resolve) {
		meuVerificador(Resolve)
	}).catch((Reject) => {
		console.log(Reject)
	});


