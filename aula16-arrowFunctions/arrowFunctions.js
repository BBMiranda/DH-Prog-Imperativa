//const somar = function(){}
//const somar = () => {}
// Se tiver apenas 1 parametro pra passar, não é necessário () !
// Se tiver apenas uma linha de comando, como apenas um console.log(), não são necessários os {}!

const somar = (numeroA, numeroB) => {
  console.log("Recebi um numero "+ (numeroA + numeroB) );
  return numeroA - numeroB;
}
//somar(20, 10);
console.log(somar(20,10))

function somaA(a,b){return a+b};
// com Arrow Function:
let somaB=(a,b)=>a+b;

console.log(somaA(1,2));
console.log(somaB(1,2));
