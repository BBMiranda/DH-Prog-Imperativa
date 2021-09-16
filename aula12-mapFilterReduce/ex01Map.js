//  Aula 12 - 30/06/2021
// ex01Map.js
/* O mapa() -> método que cria uma nova matriz com os resultados
da chama de uma função para cada elemento da matriz. */
let letrasMinusculas = ['a', 'b', 'c', 'd'];
console.log(letrasMinusculas);

// let letrasMaiusculas = letrasMinusculas.map(
//     function maiuscula(elemento) {
//         return elemento.toUpperCase();
//     }
// );

// com arrow function
let letrasMaiusculas = letrasMinusculas.map(maiuscula=elemento=>elemento.toUpperCase());
console.log(letrasMaiusculas);

