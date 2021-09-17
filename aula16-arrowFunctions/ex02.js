/* setTimeout(function(){
  console.log("Após um segundo")
}, 1000); */

/* setTimeout(() => {
  console.log("Após um segundo")
}, 1000); */

/* let ativo = false;

console.log(ativo);
// setTimeout chama apenas uma vez!
setTimeout(() => {
  ativo = true;
  console.log(ativo);
}, 3000); */

let ativo = false;

console.log(ativo);
// setInterval chama toda vez, após X segundos!
let tempo = setInterval(() => {
  ativo = true;

  console.log(`Agora está ativo`)
  clearInterval(tempo);
}, 2e3)