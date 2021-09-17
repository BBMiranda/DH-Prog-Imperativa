/* let arrow = (callback) => {
  console.log(callback);
}

function teste(texto) {
  return texto;
}

arrow(teste('Aula 16')); */

let potencia = (base, expoente) => {
  if (expoente === 0) {
    return 1;
  } else {
      return base * potencia(base, expoente - 1);
  }
}

let resultado = potencia(5,3);
console.log(resultado)

