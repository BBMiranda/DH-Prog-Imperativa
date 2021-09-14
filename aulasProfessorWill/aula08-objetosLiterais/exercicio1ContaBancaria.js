let conta = {
    numeroDaConta: 2708,
    saldo: 15000,
    titular: 'Leandro Borrelli',
    deposito: function (contDep) {
        this.saldo += contDep;
        return 'Depósito realizado corretamente, Saldo disponivel: ${this.saldo}'
    },
    saque: function (contExtr) {
        if (contExtr > this.saldo) {
            return "Saldo Insuficiente"
        } else {
            this.saldo -= contExtr
            return 'Saque realizado com sucesso! Saldo disponível: ${this.saldo}'
        }
    }
}
function Conta(numeroDaConta, saldo, titular) {
    this.numeroDaConta = numeroDaConta;
    this.saldo = saldo;
    this.titular = titular;
    this.deposito = function (cantDep) {
        this.saldo += cantDep;
        return 'Deposito realizado correctamente, Saldo disponible: ${this.saldo}'
    };
    this.saque = function (cantExtr) {
        if (cantExtr > this.saldo) {
            return 'Saldo Insuficiente'
        } else {
            this.saldo -= cantExtr
            return 'Saque realizado com sucesso, Saldo disponível: ${this.saldo}'
        }

    }
}
let joao = new Conta(1234, 20000, "João da Silva");
let maria = new Conta(1235, 10000, "Maria da Silva");