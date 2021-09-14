//exportando como um objeto

module.exports = {

    soma: (a, b) => {
        if (typeof a == 'number' && typeof b == 'number') {
            return a + b;
        }
        else { return 'Favor informar números!' }},
    subtrai: (a, b) => a - b,
         multiplica: (a, b) => a * b,
                divide: (a, b) => {
                    if (b != 0) {
                        return a / b;
                    }
                    else {
                        return 'Impossível dividir por 0!!!'
                    }
                }
    }


