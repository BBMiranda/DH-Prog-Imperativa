//programa para uma calculadora 

// recebe a entrada do operador ->  +, -, * ou /

operador = "/" // recebe o operador +, -, * ou /
numero1 = 2 // digite o primeiro número
numero2 = 2 // digite o segundo número

// usando o if...else if... else
if (operador == '+') {
    resultado = numero1 + numero2;
}
else if (operador == '-') {
    resultado = numero1 - numero2;
}
else if (operador == '*') {
    resultado = numero1 * numero2;
    }
else if (operador == '/' && numero1==0 && numero2 ==0) {
        console.log("Você escolheu operador de divisão!");
        console.log("Digite o numero1 maior que zero!");
        console.log("Digite o numero2 maior que zero!");
} else {
        resultado = numero1 / numero2;
    }
// Exibir o resultado
console.log(`${numero1} ${operador} ${numero2} = ${resultado}`);