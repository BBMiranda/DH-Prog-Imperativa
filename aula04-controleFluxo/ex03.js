// Aula 04 - 02/06/2021
// Exercício “Pode Subir”

//let altura;
//let acompanhada;

//function podeSubir(altura, acompanhada) {
//    if(altura > 1.40 && altura < 2.00) {
//        console.log("Pode subir!"); 
//    } else if((altura >= 1.20 && altura <=1.40 )&& acompanhada == true) {
//        console.log("Acesso autorizado somente com acompanhante.")
//    } else {
//        console.log("Acesso negado.");
//    }
//}
//podeSubir(1.60, false)
//podeSubir(1.55, true)
//podeSubir(1.18, true)
//podeSubir(1.35, true)
//podeSubir(1.38, false)
//podeSubir(2.01, true)

function podeSubir(altura, estaAcompanhada ) {
    let podeSubir = false;
    if (altura >= 1.4 && altura < 2) {
        podeSubir = true;
    } 
    if (altura < 1.4 && estaAcompanhada == true) {
        podeSubir = true;
    }
    if (altura < 1.2) {
        podeSubir=false;
    }
    return podeSubir;   
}
console.log(podeSubir(1.19, true))
