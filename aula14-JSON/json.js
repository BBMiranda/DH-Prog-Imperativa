let pessoa = {
  nome:"Brunno",
  idade: 21,
  altura: 180,
}

let json = JSON.stringify(pessoa); // .stringfy -> converte pra JSON!

let objetoDeNovo = JSON.parse(json); // .parse -> converte de JSON para JS!

let listaCompras = [ "Pão", "Presunto", "Queijo"];

let jsonCompras = JSON.stringify(listaCompras);

let arrayDeNovo = JSON.parse(jsonCompras);

console.log(objetoDeNovo);
console.log(arrayDeNovo);