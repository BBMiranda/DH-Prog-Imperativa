// PARTE 1
/* 
1) Crie uma variável produtos, que contenha um array de objetos, 
com no mínimo 3 itens.
Dentro da variável, liste produtos disponíveis, informando os
seguintes detalhes: 
Nome do Produto, Valor do Produto, Qualidade do
Produto e Status. */

/* A informação Qualidade do Produto deve ser um número que irá de 0 a 10.
A informação Status deve ser um Booleano, indicando se o produto está
disponível em estoque. */

const produtos = [
    {
        nome: "Produto 1",
        valor: 125,
        qualidade: 7,
        status: false
    },
    {
        nome: "Produto 2 ",
        valor: 1305,
        qualidade: 10,
        status: true
    },
    {
        nome: "Produto 3 ",
        valor: 758,
        qualidade: 6,
        status: true
    }
]
// PARTE 2
// Em seguida, um usuário deseja filtrar os produtos, com base em alguns critérios. 
/* 
Valor entre 482 e 1600;
Qualidade superior a 6;
Status como disponível. 
*/

const carrinho = produtos.filter((produto) => {
    const valor = produto.valor
    const qualidade = produto.qualidade
    const status = produto.status

    const selecionado = (valor >= 482 && valor <= 1600) && (qualidade >= 6) && (status == true) 
    return selecionado
})

// PARTE 3
/*Por fim, é necessário exibir todos os itens presentes no carrinho, 
com seus nomes e preços correspondentes, e no final um valor total, 
resultante da somatória de todos os produtos.*/
carrinho.forEach((produto) => {
      console.log("Produto: ", produto.nome)
      console.log("Valor: ", produto.valor)
      console.log("------------------------")
    })
    const total = carrinho.reduce((acumulador, produto) => {
      return acumulador.valor + produto.valor
    })
    console.log("Total: ", total)