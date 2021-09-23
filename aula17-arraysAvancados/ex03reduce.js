let numeros = [1,5,3,4,6];

let resultado = numeros.reduce(function(agrupar, num){
  return agrupar + num;
}); 

console.log(resultado);

// agrupar = numero[0] = 1;
// num = numero[1] = 5;