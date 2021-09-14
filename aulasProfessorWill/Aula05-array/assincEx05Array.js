// C5A - Aula 05 - Assíncrona
let pessoa = ["William"];
console.log(pessoa);

//push
console.log("**********início - push***********");
pessoa.push(53);
console.log(pessoa);
console.log("**********fim - push***********");

//pop
console.log("**********início - pop***********");
let excluido = pessoa.pop();
console.log(excluido);
console.log("**********array - ATUAL***********");
console.log(pessoa);
console.log("**********fim - pop***********");

//unshift
console.log("**********início - unshift***********");
pessoa.unshift(53);
console.log(pessoa);
console.log("**********término - unshift***********");

//shift
console.log("**********início - shift***********");
pessoa.shift();
console.log(pessoa);
console.log("**********término - shift***********");


