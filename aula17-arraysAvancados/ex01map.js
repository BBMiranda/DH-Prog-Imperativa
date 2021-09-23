let numeros = [1, 5, 3, 4, 6];

let dobro = numeros.map(num => num % 2 === 0); 

let dobro2 = numeros.map(
  (num)  => num % 2 === 0,
);
console.log(dobro2);

let dobro = numeros.map(function(num) {
  return num % 2 === 0;
}); 
console.log(dobro);

