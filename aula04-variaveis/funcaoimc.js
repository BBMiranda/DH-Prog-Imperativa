function calcularIMC(peso, altura) {
    return (peso / (altura * altura));
}
console.log(Math.round(calcularIMC(90, 1.76))) 
// math.roud() retorna o valor arrendodando para o inteiro mais próximo!
