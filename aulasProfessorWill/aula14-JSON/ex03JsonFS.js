// Data: 16/07/2021
// Aula 14 - JSON
//ex03JsonFS.js

const fs = require('fs'); // file system
let frutas = '{"Fruta":"banana","Preco":8.50,"Tipo":["prata","maçã","nanica"],"Origem":"Brasil"}';

fs.writeFileSync('teste.txt',frutas);

// ler o arquivo
let lerJson = fs.readFileSync('teste.txt','utf-8'); // codificação de caracteres
//console.log(lerJson);

// converter objJSON para objJS
let converterLerJson = JSON.parse(lerJson);
console.log(converterLerJson);