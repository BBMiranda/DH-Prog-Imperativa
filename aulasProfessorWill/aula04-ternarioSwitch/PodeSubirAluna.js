/*Crie uma função podeSubir() que receba dois parâmetros: 
altura da pessoa;
se está acompanhada.

Deve retornar um valor booleano (TRUE, FALSE) que indique se a pessoa pode subir ou não, baseado nas seguintes condições:
A pessoa deve medir mais de 1.40m e menos de 2 metros.
Se a pessoa medir menos de 1.40m, deverá ir acompanhada.
Se a pessoa medir menos de 1.20m, não poderá subir, nem acompanhada.
*/

    let altura;
    let acompanhada;
    function podeSubir(altura, acompanhada) {
    if (altura < 2.0 && altura >=1.40) {
        console.log("Acesso Autorizado");
    }
    else if (altura <= 1.40 && altura >= 1.20 && acompanhada == true) {
        console.log("Autorizado somente com acompanhante");
    }
    else {
        console.log("Acesso negado");
    }
    return podeSubir;
}


console.log(podeSubir(2.0,false));