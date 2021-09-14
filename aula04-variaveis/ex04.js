let nome = 'Bruno';
let sobrenome = 'Barros Miranda';
let idade = 36;
let peso = 92.5;
let altura = 1.76;
let plano = 'Ouro';

let imc = peso / (altura * altura);
console.log(imc.toFixed(2));
console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' e seu IMC é de ' + imc.toFixed(2));
console.log(`${nome} ${sobrenome} tem ${idade} e seu IMC é de ${imc.toFixed(2)} `)

