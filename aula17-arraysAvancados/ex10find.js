let moedas = [
  { nome: 'Real',   simbolo: 'R$'},
  { nome: 'Bitcoin',  simbolo: 'BTC'},
  { nome: 'Ethereum', simbolo: 'ETH'}
];

console.log(moedas);

let filtro = moedas.find((tipo) => {
  return tipo.nome = 'Real';
});

console.log(filtro);
