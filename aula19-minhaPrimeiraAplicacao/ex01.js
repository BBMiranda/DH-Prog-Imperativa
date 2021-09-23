// Cortar looping infinito * *
const dados = require("./dados")
//const totalItens = () => dados.length;

const totalItens = () => {
  return dados.length;
}
console.log(totalItens());

const totalHomens = () => {
  const total = dados.filter((filtro) => {
    return filtro.sexo === "masculino";
  });

  return total.length;
}

console.log("Total de homens: ", totalHomens())

const totalMulheres = () => {
  const total = dados.filter((filtro) => {
    return filtro.sexo === "feminino";
  });

  return total.length;
}

console.log("Total de mulheress: ", totalMulheres())

const mediaAlturaTotal = () => {
  const totalPessoas = totalItens();
  const totalAltura = dados.reduce((grupo, item) => {
    return grupo + item.altura;
  },0);
  return totalAltura / totalPessoas;
};

console.log("Média de altura geral: ", mediaAlturaTotal().toFixed(2));

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

console.log("Média de altura homens: ", mediaAlturaSexo('masculino').toFixed(2));
console.log("Média de altura mulheres: ", mediaAlturaSexo('feminino').toFixed(2));

let alturaInicial = 0; /* Inicialmente a altura é 0. */
const total = dados.forEach(function(objeto){  /* O forEach está verificando cada item do objeto */
  if(objeto.altura > alturaInicial){ /* Ao colocar objeto.altura, estamos pegando apenas as informações da altura no objeto */
    alturaInicial = objeto.altura
}
})
console.log(`A maior altura é: ${alturaInicial/100} `);