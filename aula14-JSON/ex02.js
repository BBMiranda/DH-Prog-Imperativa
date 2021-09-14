// Data: 07/07/2021
// Aula 14 - JSON
// ex02.js

let frutas = '{"Fruta":"Banana","Preço":8.50,"Tipo":["prata","maçã","nanica","da terra","ouro"],"origem":"Brasil"}';
//console.log(frutas);
//console.log(frutas.origem);
let frutasConvertidasJS = JSON.parse(frutas); //converte pra JS
//console.log(frutasConvertidasJS.origem);

//converter para JSON !
let frutasConvertidasJSON = JSON.stringify(frutasConvertidasJS) // converte pra JSON
console.log(frutasConvertidasJSON);