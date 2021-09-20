// .map() , .filter , .reduce , .forEach

// .map() => recebe uma função como parâmetro(callback)
// faz um loop no array e retorna um novo array modificado.

array.map(function (elemento) {
  // definimos as modificações que queremos
  // aplicar sobre cada elemento do array
});


let numeros = [2, 4, 6];

let dobro = numeros.map(function(num){
  //multiplica por 2 cada número!
  return num * 2;
});
console.log(dobro); // [ 4, 8, 12]

// .filter() esse método também usa uma função como parâmetro!
// filtra os elementos com base em uma condição existente!

array.filter(function(elemento){
  // definimos a condição que queremos aplicar
  // como filtro para criação do novo array
});

let idades = [22, 8, 17, 14, 30];

let maiores = idades.filter(function (idade){
  return idade >= 18;
});
console.log(maiores); // [22, 30]

// .reduce()=> recebe um callback para ser executada em cada elemento do array!
// (Como se estivesse somando todo Array)Este, por sua vez, recebe dois parâmentos(umAcumulador, elementoAtual) que está percorrendo!
//percorre o array e retorna um único valor

array.reduce(function(acumulador, elemento){
  // definimos o compartamento que queremos
  // implementar sobre o acumulador e o elemento
});

let numeros = [5, 7, 16];

let soma = numeros.reduce(function(acumulador, numero){
  return acumulador * numero
},);

console.log(soma); // 28

// .forEach => objetivo é iterar um array
// Recebe um callback como parãmetro e, ao contrário dos métodos
// anteriores, não retorna nada.

array.forEach(function(elemento){
  // definimos o comportamento que queremos
  // implementar sobre cada elemento
});

var paises = ['Brasil', 'Cuba', 'Peru'];

var umPorUm = paises.forEach(function(pais){
  return `Um por um ${pais}`;
})
console.log(umPorUm);
