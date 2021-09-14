/* 1. Repetir como um papagaio
Crie um loop utilizando for que se repita 5 vezes. Dentro de cada repetição
se deve mostrar no console a mensagem “Olá mundo”. */
for (i = 1; i <= 4; i++) { 
  console.log("Olá mundo!")
}

/* 2. Contando números ímpares
Crie um loop for de 1 a 10, em que exiba no console apenas o valor das
repetições de números ímpares. Dica: A ideia é que nas repetições ímpares
de 0 ao 10 (1,3,5,7,9) sejam mostrados os números das repetições no
console. */

for (let i = 1; i <= 9; i += 2) {
  console.log(i)
}
console.log(i)

/* 3. Criando a tabuada
Crie uma tabuada utilizando o for. Dica: Para essa tarefa você irá precisar
utilizar dois loops (for). */

for (let i = 1; i <= 10; i++ ){
  for (let calc = 1;calc <= 10; calc++)
  console.log(`${i} x ${calc} = ${i*calc}`)
}
