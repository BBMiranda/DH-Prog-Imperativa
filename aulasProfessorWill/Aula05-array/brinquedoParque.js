function podeSubir(altura, estaAcompanhada) {
    let podeSubir = false;
    if (altura >= 1.4 && altura < 2) {
        podeSubir = true;
    }
    if (altura <= 1.4 && estaAcompanhada == true) {
        podeSubir = true;
    }
    if (altura<1.2) {
        podeSubir=false;
    }
    return podeSubir;
}
console.log(podeSubir(1.1,true));