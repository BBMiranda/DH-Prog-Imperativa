function func1(numero) {
    return new Promise(resolve => {
        setTimeout(() => resolve(100 + numero),1000)
    })
}

function func2(numero) {
    return new Promise(resolve => {
        setTimeout(() => resolve(200 + numero),1000)
    })
}

function func3(numero) {
    return new Promise(resolve => {
        setTimeout(() => resolve(300 + numero),1000)
    })
}

async function minhaFuncaoAsync() {
    let numero = await func1(10);
    console.log('Soma 100 + numero');
    console.log("func1...."+numero);

    numero = await func2(numero);
    console.log("func2..."+(numero));
    console.log('Soma 200 + numero');

    let result = await func3(numero);
    console.log("func3..."+(numero));
    console.log('Soma 300 + numero');

    console.log(result);
}
minhaFuncaoAsync();

