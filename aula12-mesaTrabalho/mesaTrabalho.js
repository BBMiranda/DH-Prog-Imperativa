let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
let animacao = ["Batman", "Superman", "Flash", "Aquaman"]

function converterMaiusculas(array){
  array[0] = array[0].toUpperCase();
  array[1] = array[1].toUpperCase();
  array[2] = array[2].toUpperCase();
  array[3] = array[3].toUpperCase();
  array[4] = array[4].toUpperCase();
  return array
}
console.log(converterMaiusculas(peliculas));

function passagemDeElementos(arrayA, arrayB) {
  arrayA.push(arrayB.pop().toUpperCase())
  arrayA.push(arrayB.pop().toUpperCase())
  arrayA.push(arrayB.pop().toUpperCase())
  arrayA.push(arrayB.pop().toUpperCase())
  arrayA.push(arrayB.pop().toUpperCase())
  return arrayA
}
console.log(passagemDeElementos(peliculas, animacao))