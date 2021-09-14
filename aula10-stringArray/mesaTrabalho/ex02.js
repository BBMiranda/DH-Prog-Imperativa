//Array Invertido
/* Neste exercício, você terá que criar uma função que retorne um array com seus
elementos invertidos, sem modificá-lo. Então, você deve fazer uma função que o
modifique e inverta a ordem de seus elementos. */

/* 1. Crie a função imprimirInverso que pega um Array como um argumento e
imprime cada elemento em ordem reversa no console (você não precisa
inverter o Array). */

function inverter(array = []) {
  return array.reverse();
}

function imprimirInverso(array) {
  const arrayInvertido = inverter(array);

  arrayInvertido.forEach(item => {
      console.log(item);
  });
}

let array = [1, 2, 3, 4, 5];
imprimirInverso(array);


/* 2. Crie a função inverter que recebe um Array como argumento e retorna um novo
invertido. */
// -----------------------------------------
function inverter (){
  let letras = ['a', 'b', 'c', 'd'];
  let novasLetras = [];

  novasLetras.push(letras.reverse());
  console.log(novasLetras)
}
// ---------------------------------
inverter();

function imprimirInverso (){

  let number = [10, 20, 30, 40];
  number.reverse();
  console.log(number)
}

imprimirInverso();

// --------------------------------