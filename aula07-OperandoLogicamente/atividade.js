// Mesa 01 
// Integrantes: Alexander Bandeira, Bruno B. Miranda
// Emerson  

// Ex1. O que cada expressão retorna?
// Dê uma olhada nestes exemplos e pense sobre o que cada um retorna:
!true // false
!false // true
!!false // false
!!true // true
!1 // false
!!1 // true
!0 // false
!!0 // true
!!""  // false
let x = 5 ;
let y = 9;
console.log(x < 10 && x !== 5); // false
console.log(x > 9 || x === 5); // true
console.log (!(x === y)); // true 

// Ex2. O que cada expressão retorna?
// Sem testar no console, o que você acha que cada uma destas expressões irá retornar? Elas são true ou false?
//1º True
let x = 10
let y = "a"
console.log(y === "b" || x >= 10);
//2º False
let x = 3
let y = 8
console.log(!(x == "3" || x === y) && !(y !== 8 && x <= y));
//3º False
let str = ""
let msg = "haha!"
let eBonito = "false"
console.log(!((str || msg) && eBonito));