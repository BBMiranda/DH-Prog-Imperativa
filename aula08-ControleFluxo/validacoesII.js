let dia = "domingo";

let resultado = dia == "domingo" ? "Vou a praia!" : "Fico em casa!";

console.log(resultado);

var foo = {
  hasOwnProperty: function() {
      return false;
  },
  bar: 'Here be dragons'
};

foo.hasOwnProperty('bar'); // Sempre retorna false