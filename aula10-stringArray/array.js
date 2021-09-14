/* let filmesFavoritos = ['Star Wars', 'Kill Bill', 'Alien']; 
// Indice dentro do array ['0', '1', '2']

console.log(filmesFavoritos[2]);
console.log(filmesFavoritos.length); */

// .push()
// Adiciona um ou mais elementos ao final do array
// -> Recebe um ou mais elementos como parâmetros
// -> Retorna o novo comprimento do Array

/* let cores = ['roxo', 'Laranja', 'Azul']
cores.push('Violeta'); // Adiciona no final do Array retorna 4
console.log(cores); // ['roxo', 'Laranja', 'Azul', 'Violeta']
cores.push('Cinza', 'Ouro'); // Adiciona mais 2 no final do Array retorna 6
console.log(cores); // ['roxo', 'Laranja', 'Azul', 'Violeta', 'Cinza', 'Ouro'] */

// .pop()
// Elimina o último elemento de um array
// -> Não recebe parâmetro
// -> Retorna o elemento eliminado

/* let cores = ['roxo', 'Laranja', 'Azul'];
let ultimaCor = cores.pop();

console.log(cores); // ['Roxo', 'Laranja']
console.log(ultimaCor); // Azul */


// .shift()
// Elimina o primeiro elemento de um Array
// -> Não recebe parâmetro
// -> Retorna o elemento eliminado

/* let cores = ['roxo', 'Laranja', 'Azul'];
let primeiraCor = cores.shift();

console.log(cores); // ['Roxo', 'Laranja']
console.log(primeiraCor); // roxo */


// .unshift()
// Adiciona um ou mais elementos ao início de um Array
// -> Recebe um ou mais elementos como parâmetro
// -> Retorna o novo comprimento do array

/* let cores = ['roxo', 'Laranja', 'Azul'];
cores.unshift('Violeta'); // Adiciona elementos ao incio do Array retorna 4
console.log(cores); // ['Violeta', 'Roxo', 'Laranja', 'Azul']
cores.unshift('Cinza', 'Ouro') // Retorna 6
console.log(cores); // ['Violeta', 'Roxo', 'Laranja', 'Azul', 'Cinza', 'Ouro'] */

// .join()
// Junta os elementos de um array usando um separador que especificamos.
// Se não especificar, use vírgulas
// -> Recebe um separador(string), opcional
// -> Retorna uma string com os elementos unidos
/* let cores = ['Roxo', ' Laranja', 'Azul'];
let separadosPorVirgula = cores.join();
console.log(separadosPorVirgula); // Separados por Virgula
let separadosPorTraco = cores.join(' - ');
console.log(separadosPorTraco); // Separados por Traço */

// .lastIndexOf()
// Similar ao . indexOf(), exceto que ele começa procurando pelo
// elemento no final do array (de trás para frente).
// Se houver elementos repetidos, ele retorna a posição do primeiro
// que encontrar (ou seja, o último, se olharmos desde o início).

/* let cores = ['Roxo', 'Laranja', 'Azul', 'Laranja'];
cores.lastIndexOf('Laranja');
console.log(cores.lastIndexOf('Laranja'));
// Ele encontou o que procurava.
// Retorna 3, que é o índice do elemento encontrado.

cores.indexOf('Abacaxi')
console.log(cores.lastIndexOf('Abacaxi'))
// Não encontrou o que procurava. Retorna -1 */

// .includes()
// Também similar ao .indexOf(), mas retorna um booleano
// -> Recebe um item para pesquisar no array
// -> Retorna verdadeiro se encontrou o que estava procurando, falso se não

let cores = ['Roxo', 'Laranja', 'Azul'];
cores.includes('Laranja');
console.log(cores.includes('Laranja'))
// Ele encontrou o que procurava. - Retorna True
cores.includes('Abacaxi');
console.log(cores.includes('Abacaxi'))
// Não encontrou o que procurava. - Retorna false

