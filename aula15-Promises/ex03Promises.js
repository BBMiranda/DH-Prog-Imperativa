// Data: 12/07/2021
// Aula 15 - Promises
// ex03Promises.js

// host
let dadosConexaoJson = '{"server":"168.192.0.1","login":"admin","senha":123}';
//console.log(dadosConexaoJson);

//convertendo em JS
let dadosConexaoJS = JSON.parse(dadosConexaoJson);
/* console.log(dadosConexaoJS.server);
console.log(dadosConexaoJS.login);
console.log(dadosConexaoJS.senha); */

// usuário
let vserver = "168.192.0.1";
let vlogin = "admin";
let vsenha = 123;

// configuração padrão
let conexao = false;

if (
  dadosConexaoJS.server == vserver &&
  dadosConexaoJS.login == vlogin &&
  dadosConexaoJS.senha == vsenha
) {
  conexao = true;
  //console.log(conexao)
} else {
  conexao = false;
  //console.log(conexao)
}
// Criação da Promise
const promessa = new Promise((resolve, reject) => {
console.log("Requisição em andamento...")
// Criação de um Delay de 3 segundos
setTimeout(
		() => { // Verificamos se a promise dará erro ou não !
			if(conexao == false) {reject("ACESSO NEGADO - SERVER NÃO CONECTADO")
			} else {
			resolve(JSON.stringify(
				{
					vserver: "168.192.0.1",
					vlogin: "admin",
					vsenha: 123
				}
				))
			}
		}, 3000)
})
promessa.then(
	(resolve) => { //consumo ou utilização do retorno da promisse
	const dados = JSON.parse(resolve);
	console.log(dados); 
	}
).catch(
	(reject) => {
		console.log(reject)
	}
)



