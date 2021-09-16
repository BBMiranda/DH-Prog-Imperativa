let pais = {
  nome: "Brasil",
  populacao: 202768562,
  capital: "Brasília",
  dizerNacionalidade: function(){
    return `A população do ${this.nome} é de: ${this.populacao} habitantes`;
  }
};

console.log(pais.dizerNacionalidade());

let tenista = {
  nome: "Roger",
  idade: 38,
  ativo: true,
  sobrenome: "Federer",
  saudacao: function(){
    return `Olá, me chamo ${this.nome}.`
  }
};
console.log(tenista.nome); // Roger
console.log(tenista.sobrenome); // Federer
console.log(tenista.saudacao()); // Olá, me chamo Roger.


// Função Construtora

let carro = {
  marca: "Fiat",
  modelo: "Uno",
};
// Função Construtoras => Começa com Letra "MAIUSCULA"!!!
function Carro(valorMarca, valorModelo) {
  this.marca = valorMarca;
  this.modelo = valorModelo;
};

console.log(carro);
console.log(new Carro("Renault", "Clio"))

function Dados(nome, sobrenome, altura, sexo, idade, tipoSanguineo, nascimento) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.altura = altura;
  this.sexo = sexo;
  this.idade = idade;
  this.tipoSanguineo = tipoSanguineo;
  this.nascimento = nascimento;
}
let dados1 = new Dados("Bruno", "Miranda", 1.76, "Masculino", 36, "O", "02/02/1985");
let dados2 = new Dados("AndWiN", "Naïllo", 1.76, "Masculino", 136, "O", "02/02/????")
console.log(dados1)
console.log(dados2)