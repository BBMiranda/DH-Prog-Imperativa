// Aula referente dia 31/05/21
// Função declarada e expressa, escopo local e global!

// Função declarada
function darOi(nome, sobrenome) {
    console.log("Olá tudo bem?  " + nome + " " + sobrenome);
};

darOi("Bruno", "Miranda");
darOi("Eduardo", "Muller");
darOi("Herick", "Muller");

// Função expressa
let somar = function () {
    console.log(1+1);
};
somar();

let somar1 = function (numA, numB) {
    console.log(numA + numB);
    return numA + numB; // linha 22 somada com linha 27 retornar o resultado no console.
};

somar1(10, 20);
let resultado = somar1(1, 2);
console.log(resultado);

// Escopo
let resultado1 = 0;
console.log("resultado fora da função =", resultado1);

function multiplicar(numA, numB) {
    let resultado1 = numA * numB;
    console.log("\n resultado dentro da função =", resultado1);
}
multiplicar(2, 2);


