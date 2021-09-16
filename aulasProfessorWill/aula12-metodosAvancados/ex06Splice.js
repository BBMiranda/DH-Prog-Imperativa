// ex06Splice.js
// Splice = emendar
// O método array.splice(), serve para remover e adicionar elementos de um array
// array.splice(início, quantidade, item1, item2, ...);
// quantidade: opcional - números inteiros a eliminar do array.
// Itens: 

const frutas = ['Banana',"Laranja", "Limão", "Maçã", "Manga"];
//console.log(frutas);

frutas.splice(2,0,"Mamão","Kiwi");

console.log("Lista com adição......: ",frutas); 
