// Aula 08 - 16/06/2021
// 280, 330, 1500
// Lucro: 50%
// 1) Listar os valores de custo dos produtos - OK
// 2) Listar os Valores de venda ao consumidor - OK
// \n Quebra de Linha
let precoCusto = [280, 330, 1500, 3300, 150];
let margemLucro = 1.50;

function custoInicial(precoCusto) {   
    console.log("\n*******Relatório Preço Custo*******");
    for(let i = 1; i < precoCusto.length; i++ ) {
        console.log("Posição do Array é: " + i + " - "+precoCusto[i]);
    }
}
custoInicial(precoCusto);
// Com Lucro
function precoVenda(precoCusto) {
    console.log("\n*******Relatório Preço ao Consumidor*******");
    for(let i = 0; i < precoCusto.length; i++) {
        let resultado = precoCusto[i]*margemLucro;
        console.log("Posição do Array é" + i + " - "+resultado);
    }
}
precoVenda(precoCusto);