// Data: 12/07/2021
// Aula 15 - Promises
// ex02SeTimeOut.js
// Esperando por um tempo limite
console.log("Requisição em andamento...");
setTimeout(function () {
    funcaoConectar("Server Conectado - OK");
}, 2000);

function funcaoConectar(value) {
    console.log(value);
}
