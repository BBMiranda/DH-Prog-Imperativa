//Aula 9 - 21/06/2021
// Objetos Literais

let carro = {
    placa: "ADF1234",
    cor: 'prata',
    ano: 2021,
    flex: true,
    mostrar: function() {
        return 'Características do seu carro novo:\nPlaca=' + carro.placa+
        '\nCor=' + this.cor+
        '\nAno=' + this.ano+
        '\nTotal Flex=' + this.flex;

    } 
}

console.log(carro.mostrar());