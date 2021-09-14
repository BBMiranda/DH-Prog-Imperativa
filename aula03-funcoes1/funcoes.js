//Função: É uma sequência de ações que serão executadas
//quando necessário.

//função declarada
function darOi(){
  console.log("Olá tudo bem?");
}
darOi();
darOi();
darOi();

//função expressa
let somar = function(numA, numB) {
  return numA + numB;
} 
somar(10, 20);

//let resultado = somar(1, 2);
console.log(somar(1, 2));

//Escopo
let resultado = 0
console.log("Resultado fora da função =", resultado);

function multiplicar(numA, numB){
  let resultado = numA * numB;
  
  console.log("Resultado dentro da função =", resultado);
}
multiplicar(2, 2);
