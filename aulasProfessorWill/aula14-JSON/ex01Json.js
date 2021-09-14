// troca de dados - formulário para o servidor
// criação e consumo - utilizando api´s
// persistência de dados em navegadores e servidores.
// formato de dados - padrão da web atualmente
// json - não suporta comentários

let dadosJson = '{"nome":"William","sobrenome":"Pantoja","idade":53}';
//console.log(dadosJson);
// JSON é um objeto nativo
// desserialização = parsing
let dadosConvertidosJS = JSON.parse(dadosJson); // objeto literal 
//console.log(dadosConvertidosJS);
//console.log(dadosConvertidosJS.sobrenome.toUpperCase());

//serialização cria um formato JSON
let objetoConvertidoJson = JSON.stringify(dadosConvertidosJS);
console.log(objetoConvertidoJson);