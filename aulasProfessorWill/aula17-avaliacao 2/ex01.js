// Data: 07/07/2021
// Aula 14 - JSON

let dadosJson = '{"nome":"William", "Sobrenome": "Pantoja", "Sexo":"Masculino"}';
//console.log(dadosJson);
//Json é um objeto nativo

//desserialização ou parsing 
//conversão JSON para um objeto JS 
/*-- início --*/
/* let dadosConvertidosJs = JSON.parse(dadosJson); // converter em objeto literal em JS
console.log(dadosConvertidosJs);
console.log(dadosConvertidosJs.nome.toUpperCase()); */
/*-- término --*/

//serialização cria um objeto JSON
//conversão JSON para um objeto JS 
/*-- início --*/
//let novoDadoJson = JSON.stringify(dadosConvertidosJs); //converter JS p/ JSON
//console.log(novoDadoJson);
/*-- término --*/

let objetoLiteral = {materia: 'Prog. Imperativa', professor: 'william'};
objetoLiteral.professor=objetoLiteral.professor.toUpperCase();
//console.log(objetoLiteral.professor);

//Transformar em JSON - parsing
let objetoConvertidoJSON = JSON.stringify(objetoLiteral);
console.log(objetoConvertidoJSON); 

