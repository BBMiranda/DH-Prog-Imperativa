//Grupo 03 - Andressa Malta, André José, Bruno B. Miranda, 
//Felipe Almeida, Ivan Felipe

//Micro Desafio 01
function teste1(x, y) {
  return y - x
}
console.log(teste1(10,40));

//Micro Desafio 02
function teste2(x, y) {
  return x * 2
  console.log(x)
  return x / 2
}
console.log(teste2(10))

// Funçõe Simples
//1. Crie uma função que converta polegadas em centímetros. 
//Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.
function polegadaEmCentimetro(polegadas) {
  return (polegadas * 2.54);
}
console.log(polegadaEmCentimetro(1))

//2. Crie uma função que receba uma string e a converta em um URL.
//ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"
function stringEmUrl(string) {
  let url = `https://www.${string}.com.br`
  console.log(url)
}
stringEmUrl('teste')

//3. Crie uma função que recebe uma string e retorna a mesma frase, 
//mas com o caracter de exclamação ( ! ).
function 


function exclamation(str) { 
  let newValue = `${str}!`; 
  console.log(newValue); 
} 
exclamation('teste'); 

//4. Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.
function dogAge (age) { return (age * 7); } console.log(dogAge(3)) 

//5. Crie uma função que calcule o valor da sua hora de trabalho, 
//tendo como parâmetro o seu salário mensal.
//PS: considere que você trabalhe 160 horas no mês.
function horaTrabalho (salarioMes) {
  return salarioMes / 160
}
console.log(horaTrabalho(1500.00))

//6. Crie a função calculadora de IMC* de uma pessoa, 
//que recebe a altura em centímetros e o peso em quilogramas. 
//Em seguida, execute a função, testando diferentes valores.
function IMC(altura, peso) {
  let imc = (peso / (altura * altura))
  return Math.round(imc)
}
console.log(IMC(1.76, 92));

//7. Crie uma função que receba uma string em minúsculas, 
//converta-a em maiúsculas e as retorne. 
//Investigue o que o método de .toUpperCase() faz.
function converterMaiusculas(texto) { 
  let maiscula = texto.toUpperCase(); 
  return maiscula; 
}
console.log(converterMaiusculas)


//8. Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.
//Dica: Isso te ajudará a entender o que o operador typeof faz.
8 function tipoDados(x) { return typeof(x) } console.log(tipoDados(7)) 


//9. Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
//Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.
function circunference(rad) { return(Math.pow(rad, 2) * Math.PI); } console.log(circunference(2)); 
function circunferencia(raio) { return 2 * Math.PI * raio; } 