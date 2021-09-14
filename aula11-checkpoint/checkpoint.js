// Checkpoint 28/06/2021
//Nome Integrantes Grupo:
// Bruno B. Miranda, David da Silva Sousa, Douglas Santos Araujo
// Mariana Pacheco, Giovani de Paula Silva 

// Microondas Super Veloz

// Comidas
let pipoca = 10;
let macarrao = 8;
let carne = 15;
let feijao = 12;
let brigadeiro = 8;


//  Função Microondas Super Veloz
function microondas(comidas, tempo) {
// Usando switch para vericar a comida e o tempo inseridos !
    switch(comidas) {
        case "pipoca" :
            if (tempo < pipoca) // Limitando meu tempo menor do que 10 segundos !
            console.log("Tempo insuficiente !!!");
            else if (tempo >= 10 && tempo <= 19) // Limitando meu tempo entre 10 e 19 segundos !
            console.log("Prato pronto, bom apetite !!!");
            else if (tempo >= 20 && tempo <= 29) // Limitando meu tempo ente 20 e 29 segundos !
            console.log("A comida queimou !!!");
            else 
            console.log("Kabummm !!!") // Toda excessão de tempo superior ao pedido acima !
        break;
        case "macarrao" :
            if (tempo < 8) // Limitando meu tempo menor do que 8 segundos !
            console.log("Tempo insuficiente !!!");
            else if (tempo >= 8 && tempo <= 15) // Limitando meu tempo entre 8 e 15 segundos !
            console.log("Prato pronto, bom apetite !!!");
            else if (tempo >= 16 && tempo <= 23) // Limitando meu tempo entre 16 e 23 segundos !
            console.log("A comida queimou !!!");
            else 
            console.log("Kabummm !!!") // Toda excessão de tempo superior ao pedido acima !
        break;
        case "carne" :
            if (tempo < 15) // Limitando meu tempo menor do que 15 segundos !
            console.log("Tempo insuficiente !!!");
            else if (tempo >= 15 && tempo <= 29) // Limitando meu tempo entre 15 e 29 segundos !
            console.log("Prato pronto, bom apetite !!!");
            else if (tempo >= 30 && tempo <= 44) // Limitando meu tempo ente 30 e 44 segundos !
            console.log("A comida queimou !!!");
            else 
            console.log("Kabummm !!!") // Toda excessão de tempo superior ao pedido acima !
        break;
        case "feijao" :
            if (tempo < 12) // Limitando meu tempo menor do que 12 segundos !
            console.log("Tempo insuficiente !!!");
            else if (tempo >= 12 && tempo <= 23) // Limitando meu tempo entre 12 e 23 segundos !
            console.log("Prato pronto, bom apetite !!!");
            else if (tempo >= 24 && tempo <= 35) // Limitando meu tempo ente 24 e 35 segundos !
            console.log("A comida queimou !!!");
            else 
            console.log("Kabummm !!!") // Toda excessão de tempo superior ao pedido acima !
        break;
        case "brigadeiro" :
            if (tempo < 8) // Limitando meu tempo menor do que 10 segundos !
            console.log("Tempo insuficiente !!!");
            else if (tempo >= 8 && tempo <= 15) // Limitando meu tempo entre 10 e 19 segundos !
            console.log("Prato pronto, bom apetite !!!");
            else if (tempo >= 16 && tempo <= 23) // Limitando meu tempo ente 20 e 29 segundos !
            console.log("A comida queimou !!!");
            else 
            console.log("Kabummm !!!") // Toda excessão de tempo superior ao pedido acima !
        break;
        default:
            return console.log("Prato inexistente !!!") // Qualquer prato que não esteja listado no switch !
    }
} 
// Comida e tempo !
microondas("pipoca", 10); 
microondas("macarrao", 10);
microondas("carne", 10);
microondas("feijao", 10);
microondas("brigadeiro", 10);
