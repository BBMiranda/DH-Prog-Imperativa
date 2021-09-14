// Data: 07/07/2021
// Aula 14 - JSON


//Json é um objeto nativo
//let dadosJson = '{"nome":"Bruno", "sobrenome": "Miranda", "sexo":"Masculino"}'; 
//console.log(dadosJson); 

//desserialização ou parsing
//conversão JSON para um objeto JS !
/*-- Início --*/
//let dadosConvertidosJs = JSON.parse(dadosJson); 
//console.log(dadosConvertidosJs.sexo.toUpperCase()); 
/*-- Término --*/

//serialização cria um objeto JSON
//conversão JSON para um objeto JS !
/*-- Início --*/
//let novoDadoJson = JSON.stringify(dadosConvertidosJs); //converter JS p/ JSON
//console.log(novoDadoJson);
/*-- Término --*/

let objetoLiteral = {materia: 'Prog.Imperativa', professor: 'William'};
objetoLiteral.professor=objetoLiteral.professor.toUpperCase();
//console.log(objetoLiteral.professor);

// Transformar em JSON - parsing
let objetoConvertidoJSON = JSON.stringify(objetoLiteral);
console.log(objetoConvertidoJSON);