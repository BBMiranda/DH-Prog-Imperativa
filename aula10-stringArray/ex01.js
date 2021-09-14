//let number = Array(54, 36, 66, 72);
let number = [54, 36, 66, 72, 56, 98];
let strings = ['Nome', 'Nome do Meio', 'Último Nome']
//console.log(number[number.length - 1]);

console.log(number);
//number.push(101); // adiciona no final do array
//number.unshift(101); // adiciona no final do array
//number.pop(); // remove o ultimo item do array
//number.shift(); // remove o primeito item do array
const busca = number.indexOf(101);
console.log(busca);

let cores = ['Vermelho', 'Verde', 'Azul'];

console.log(cores[0]);
console.log(cores[1]);
console.log(cores[2]);

const [red, green, blue] = cores;

console.log(red);
console.log(green);
console.log(blue);

let alunos = [
    'Rodrigo', 
    37, 
    true, 
    [
    [
        10,
        5,
        8
    ],
    [
        6,
        9,
        7
    ],
]
];

let [nome, idade, ativo, notas] = alunos;

console.log(nome);
console.log(idade);
console.log(ativo);
console.log(notas[0][1]);
console.table(notas);


/* for (let i = 0; i <= 10; i++) {
    console.log(i * 7);
} */

let valor = 1;
while(valor <= 10) {
    console.log(valor * 5)
} 

do {
    console.log(valor * 5);
    valor++;
} while(valor <= 10)