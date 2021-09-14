let contaJose = {
    numeroConta: 12124455,
    nomeTitular: "José Silva",
    saldo: 0.0,//parte 1
    deposito: function(dinheiroDeposito){ //parte 2 
        if(dinheiroDeposito > 0.0){
            this.saldo += dinheiroDeposito;
            console.log("Deposito: " + dinheiroDeposito + "\nSaldo: " + this.saldo); 
        }
    },
    saque: function(valorSaque){ //parrte 3
        if(this.saldo >= valorSaque && this.saldo != 0.0){
            this.saldo -= valorSaque;
            console.log("Saque: " + valorSaque + "\nSaldo: " + this.saldo);
        }else{
            console.log("Fundos Insuficientes");
        }
    }
}
contaJose.deposito(100);
contaJose.saque(100);
function Conta(numeroConta,nomeDoTitular){ // Parte 4
    this.numeroConta =  numeroConta;
    this.nomeDoTitular = nomeDoTitular;
    this.saldo = 0.0;
    this.deposito = function(dinheiroDeposito){
        if(dinheiroDeposito > 0.0){
            this.saldo += dinheiroDeposito;
            console.log("Deposito: " + dinheiroDeposito + "\nSaldo: " + this.saldo); 
        }
    }
    this.saque = function(valorSaque){
        if(this.saldo >= valorSaque && this.saldo != 0.0){
            this.saldo -= valorSaque;
            console.log("Saque: " + valorSaque + "\nSaldo: " + this.saldo);
        }else{
            console.log("Fundos Insuficientes");
        }
    }
}
const contaFernando = new Conta(12121212,"Fernando");// parte 5
const contaDanilo = new Conta(12121331,"Danilo");
const contaWillian = new Conta(12223145,"Willian");
console.log(contaFernando);
console.log(contaDanilo);
console.log(contaWillian);