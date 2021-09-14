// C5A - Aula 05 - Assíncrona
let produtosCompra = ["Arroz","Feijão","Frios", "Carne"];
console.log("Lista de Produtos para Comprar")
console.log(produtosCompra);
console.log("******Término - Lista de Produtods para Comprar*******");

// 
console.log("push -> inserir elementos no final");
produtosCompra.push("Danone","Biscoito Recheado");
console.log(produtosCompra);
console.log("**********Término - push***********");

//
console.log("pop -> retirar elemento do array");
let excluido = produtosCompra.pop();
console.log(excluido);
console.log("**********array - ATUAL***********");
console.log(produtosCompra);
console.log("**********fim - pop***********");

// 
console.log("unshift -> para inserir elementos no início de um array");
produtosCompra.unshift("Doce de Leite");
console.log(produtosCompra);
console.log("**********término - unshift***********");

// 
console.log("shift --> para retirar elementos no início de um array");
produtosCompra.shift();
console.log(produtosCompra);
console.log("**********término - shift***********");

// 
console.log("indexOf localizar um elemento e exibir o índice da ocorrência");
console.log(produtosCompra.indexOf("Feijão"));
console.log("**********término - indexOf***********");

console.log("lastIndexOf localizar um elemento e exibir o índice da ocorrência");
console.log(produtosCompra);

console.log(produtosCompra.lastIndexOf("Feijão"));
console.log("**********término - lastIndexOf***********");



console.log("join -> para unir todos os elementos presentes em um array");
console.log(produtosCompra.join());
console.log("**********término - join***********");
