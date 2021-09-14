let produtosCompra = ['Arroz', 'Feijão', 'Carne', 'Cerveja'];
let separadorTraco = produtosCompra.join(' $ ');
console.log(`\n O método join serve para separar os itens do Array, com o que especificamos: `);
console.log(separadorTraco);


let removerProduto = produtosCompra.pop('Frango');
console.log(`\n O método pop remove o último item do Array:`);
console.log(removerProduto);
console.log(produtosCompra);

console.log(`\n O método push adiciona um ou mais elementos no final do Array:`);
produtosCompra.push('Pipoca', 'Chocolate');
console.log(produtosCompra);

console.log(`\n O método shift elimina o primeiro elemento de um Array:`);
produtosCompra.shift()
console.log(produtosCompra)

console.log(`\n O método ushift adiciona um ou mais elementos no inicio de um Array:`);
produtosCompra.unshift('Nescau', 'Cebola')
console.log(produtosCompra)
