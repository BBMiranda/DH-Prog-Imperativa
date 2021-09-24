const dados = require('./dados')

const maiorAltura = () => {
    let maior = dados[0];
    dados.forEach((item) =>{
        if (item.altura >= maior.altura){
            maior = item;
         }        
    })

    return maior.altura;
}

console.log(`Maior altura do grupo: ${maiorAltura()/100} metros.`);

const menorAltura = () => {
    let menor = dados[0];
    dados.forEach((item) =>{
        if (item.altura <= menor.altura){
            menor = item;
         }        
    })

    return menor.altura;
}

console.log(`Menor altura do grupo: ${menorAltura()/100} metros.`);

const mediaAlturaMulheres = () => {
    const filtroMulheres = dados.filter((filtro) => filtro.sexo === 'feminino');
    const totalMulheres = filtroMulheres.length
    const totalAlturas = filtroMulheres.reduce((soma,item) => {
        return soma + item.altura;
    },0)
    return totalAlturas/totalMulheres;
}

console.log(`Média de altura das mulheres do grupo: ${(mediaAlturaMulheres()/100).toFixed(2)} metros.`);

const totalHomens = () => {
    const total = dados.filter((filtro) => filtro.sexo === 'masculino');
    return total.length;
}

console.log(`Total de homens do grupo: ${totalHomens()}.`);

