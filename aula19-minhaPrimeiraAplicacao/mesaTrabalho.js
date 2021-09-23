/* MAIOR ALTURA */
const dados = require('./dados');

let alturaInicial = 0; /* Inicialmente a altura é 0. */
const total = dados.forEach(function(objeto){  /* O forEach está verificando cada item do objeto */
if(objeto.altura > alturaInicial){ /* Ao colocar objeto.altura, estamos pegando apenas as informações da altura no objeto */
alturaInicial = objeto.altura
}
})
console.log(`A maior altura é: ${alturaInicial/100} `);

/* MENOR ALTURA */

let maiorAltura = 190; /* Inicialmente a altura é 0. */
const total1 = dados.forEach(function(objeto1){  /* O forEach está verificando cada item do objeto */
if(objeto1.altura < maiorAltura){ /* Ao colocar objeto.altura, estamos pegando apenas as informações da altura no objeto */
maiorAltura = objeto1.altura
}
})
console.log(`A menor altura é: ${maiorAltura/100} `);

/* ------------------------- 2 ------------------------*/

const mediaAlturaSexo = (sexo) => {
  const dadosFiltrados = dados.filter((filtro) => {
    return filtro.sexo === sexo;
  }) 
  
  const totalPessoas = dadosFiltrados.length;
  const totalAltura = dadosFiltrados.reduce((grupo, item) => {
    return grupo + item.altura;
  },0);
  return totalAltura / totalPessoas;
};

console.log("Média de altura mulheres: ", mediaAlturaSexo('feminino').toFixed(2));

/* ------------------------- 3 ------------------------*/

const totalHomens = () => {
  const total = dados.filter((filtro) => {
    return filtro.sexo === "masculino";
  });

  return total.length;
}

console.log("Total de homens: ", totalHomens())



