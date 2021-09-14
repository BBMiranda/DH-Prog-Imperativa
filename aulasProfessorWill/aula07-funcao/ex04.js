//ex04.js


let multiplo = (a, b) => {
let resto = a % b; 
return resto == 0; 
};
console.log(multiplo(2,2));
if(multiplo(2,2)==true){
    console.log("É MULTIPLO")
} else {
    console.log("NÃO É MULTIPLO")
}

