let jsonSimples = {
  nome: "Rodrigo",
  idade: 37,
  notas: [
  {  
    notaProva: 10,
    notaTrabalho: 2,
    media: 2,
  },
  {  
    notaProva: 8,
    notaTrabalho: 0,
    media: 7,
  }
  ],
  modulos: {
    javascript: {
      ativo: true,
      titulo: "JavaScript",
      valor: "R$ 1.000, 00"
    }, 
    php: false, 
    java: true,
    mysql: true,
    cSharp: false
  },
  processar: function() {

  }
}

console.log(jsonSimples.modulos.javascript);
