let listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8];

// .map()
let listaNumeroDobro = listaNumeros.map(function(valor, index){
  return valor * 2;
});
//console.log(listaNumeroDobro);

// .filter()

let listaNumerosFiltrados = listaNumeros.filter(function(valor, index){
  return valor > 6;
})
//console.log(listaNumerosFiltrados);

// .reduce()

let listaNumerosSomados = listaNumeros.reduce(function(resultados, valor){
  return resultados + valor;
});

//console.log(listaNumerosSomados);

// .forEach

listaNumeros.forEach(function(valor, teste){
  console.log("O valor é: " + valor + " e a sua posição é: " + teste);
})

