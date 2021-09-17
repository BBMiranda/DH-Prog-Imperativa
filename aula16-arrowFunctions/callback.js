const somar = (numeroA, numeroB) => numeroA + numeroB;

const calculadora = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB);


console.log(calculadora(50, 10, somar));
console.log(calculadora(100, 25, (numeroA, numeroB) => numeroA - numeroB));
