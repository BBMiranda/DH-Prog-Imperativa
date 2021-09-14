// Função Declarativa
function teste1(parametroA, parametroB) {
  //console.log(parametroA + ' ' + parametroB)
  console.log(`${parametroA} ${parametroB}`)
}

teste1('Rodrigo', 'Sarri') // Os valores 'Rodrigo' e 'Sarri" são os ARGUMENTOS!

// Função Expressa 
let teste2 = function(a, b) {
  console.log(`O valor total é de : ${a+b}`);
}
teste2(5,5);

