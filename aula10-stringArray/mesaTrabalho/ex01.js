let number = [22, 33, 54, 66, 72];
console.log(number[number.length]) 
// Undefined | ira dar um número fora do array (Indice = 6), e por isso da undefined.

let grupoDeAmigos = [['Harry', 'Ron', 'Hermione'], ['Spiderman', 'Hulk', 'Ironman'], ['Penélope Glamor', 'Pierre Nodoyuna', 'Patán']];
console.log(grupoDeAmigos[1][0]); 
// Spiderman | que é o 1º Item Indice 0 da 2º Lista Indice 1!

let str = "Uma String qualquer"
let string = [[45, 89, 0], ['Digital', 'House', true], ['String', '123', 'false', 54, true, str]];
console.log(string[2][string[2].length-1]) 
// retorna "uma string" qualquer pois o 1º item Indice 2 e o segundo conta o total de elementos 
// string e diminui 1 e puxa o resultado no indice 5!
