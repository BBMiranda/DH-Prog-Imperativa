const dados = require("./dados");

//3 - ótimo
//2 - bom
//1 - regular

//a média das idades das pessoas que responderam ótimo;
const mediaIdadesOtimo = () => {
    const dadosOtimo = dados.filter((filtro) => filtro.nota === 3);
    const totalOtimo = dadosOtimo.length;
    const totalIdades = dadosOtimo.reduce ((soma, item) => {
        return soma + item.idade;
    },0)
    return totalIdades / totalOtimo;
}

console.log(`Média da idade das pessoas que responderam Ótimo: ${mediaIdadesOtimo()}.`)

//a quantidade de pessoas que responderam regular;
const totalRegular = () => {
    const dadosRegular = dados.filter((filtro) => filtro.nota === 1);
    return dadosRegular.length;
}

console.log(`Total de pessoas que responderam Regular: ${totalRegular()}.`);

//a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.
const percentualBom = () => {
    const dadosBom = dados.filter((filtro) => filtro.nota === 2);
    return dadosBom.length / dados.length;
}

console.log(`Percentual de pessoas que responderam Bom: ${(percentualBom()*100).toFixed(2)}%.`);