// Aula 09 - 21/06/2021
// Dentro da pasta Modulos
// exExpCalculos.js

module.exports.soma=(a,b)=>a+b;
module.exports.subtracao=(a,b)=>a-b;
module.exports.multiplicacao=(a,b)=>a*b;
module.exports.divisao=(a,b)=> {
    if (b!=0) {
        return a/b;
    }else{
        return 'Impossível dividir por Zero';
    }
}