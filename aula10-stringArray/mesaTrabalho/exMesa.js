////////////////////////////////////////////// Atividade 01 //////////////////////////////////////////////

let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length])
// retorna undefined porque o numbers.length irá dar um numero fora do array. (lenght é 6 e o ultimo indice é 5)

let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk",
"Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos[1][0])
//retorna "Spiderman" que é o 1º item (indice 0) da 2ª lista (indice 1)

let str = "una string qualquer"
let grupoDeAmigos = [   [45, 89, 0],                                    //0
                        ["Digital", "House", true],                     //1
                        ["string","123","false", 54, true, str]         //2
                    ]


console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])
//retorna "una string qualquer" pois é o 6º item (indice 5) da 3ª lista (indice 2)

let a = grupoDeAmigos[2]                //["string","123","false", 54, true, str]
let b = a.length - 1                    //5
let c = a[b]                            //a[5]


////////////////////////////////////////////// Atividade 02 //////////////////////////////////////////////

// Solução 01 Jai
function imprimirInverso (number){
    number.reverse();
    console.log(number);
}

imprimirInverso([10, 20, 30, 40]);

// Solução 02 Jai
function inverter (){
    let letras = ['a', 'b', 'c', 'd'];
    let novasLetras = [];

    novasLetras.push(letras.reverse());
    console.log(novasLetras)
}

inverter();

// Solução 01 Andressa
function imprimirInverso(array) {
    for (let i = array.length-1; i >= 0; i--) {
        console.log(array[i])
    }
}
imprimirInverso([1,2,3,4])

// Solução 02 Andressa
let novaArray = []
function inverter(array) {
    for (let i = array.length-1; i >= 0; i--){
        novaArray.push(array[i])
    }
    return novaArray
}

console.log(inverter([1,2,3,4]));


// Solução 01 Professor
// Opção 01
function imprimirInverso(array) {
    const arrayInvertido = inverter(array);

    if (typeof arrayInvertido !== 'string') {
        arrayInvertido.forEach(item => {
            console.log(item);
        });
    } else {
        console.log(arrayInvertido);
    }
}


let array = [1, 2, 3, 4, 5];
imprimirInverso(array);

//Opção 02
function imprimirInverso(array) {
    const arrayInvertido = inverter(array);

    arrayInvertido.forEach(item => {
        console.log(item);
    });
}


let array = [1, 2, 3, 4, 5];
imprimirInverso(array);

// Solução 02 Professor
// Opção 01
function inverter(array = []) {
    if (array.length > 0) {
        return array.reverse();
    }

    return 'Envie um array válido com ao menos um item';
}

// Opção 02
function inverter(array = []) {
    return array.reverse();
}

////////////////////////////////////////////// Atividade 03 //////////////////////////////////////////////

function somarArray (array = []) {
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum
}
console.log(somarArray([1,2,3]));

////////////////////////////////////////////// Atividade 04 //////////////////////////////////////////////


let msg = ['o','l','á'];

function concatenar(str,i) {
  return str.concat(i)
}

function join (array) {
  return array.reduce(concatenar)
}
console.log(join(msg))

////////////////////////////////////////////// Atividade 05 //////////////////////////////////////////////

let movies = ["starwars", "matrix", "mr.robot", "o preço do amanhã"]

function upperCase(array) {
  let newArray = [];
  for (i =0; i < array.length;i++){
    newArray.push(array[i].toUpperCase());
  } 
  return newArray
}
console.log(upperCase(movies))

let animacoes = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];




