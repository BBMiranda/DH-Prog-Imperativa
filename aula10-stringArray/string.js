// lenght (Quantas letras tem no texto!)
// -> para saber o comprimento
let texto = "Oi eu sou o Vinicius"
console.log(texto.length);

//indexOf (Começa a contar a partir da letra escolhida ou palavra)
// -> para saber se algo existe
console.log(texto.indexOf("Vinicius"));

//slice (Seleciona a casa de string no inicio e no fim, o que é pra selecionar )
// -> para pegar uma parte do texto 
let palavra = texto.slice(0, 3);
console.log(palavra)
console.log(texto)

//trim (Remove os espaços antes do texto, mas não os espaços entre palavras!)
//-> para reover os espaços em branco
console.log(texto.trim())

//split (Transforma o texto em um Array, colocando espaço nesse caso
// se colocar o 'V' ele retira a letra e quebra as partes em Array)
// -> para gerar um array
console.log(texto.split("V"))

//replace (Substitui a palavra no primeira parametro pela do segundo!)
// -> para alterar uma parte do texto
let textoNovo = texto.replace('Vinicius', 'João');
console.log(textoNovo);
console.log(texto.replace('Vinicius', 'Bruno'));