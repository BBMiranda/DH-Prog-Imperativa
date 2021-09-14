let pessoa={
    //propriedades
	nome: 'Silvia',
	idade: 54,
	sexo: 'f',
	filhos: 2,
    //método
    //para evitar que se escreva toda hora o nome do objeto utiliza-se a palavra this - refere-se a propriedade do próprio objeto.
    imprimeEmpresa: function() {return 'Meu nome é '+pessoa.nome+', tenho '+pessoa.filhos +' filhos e sou enfermeira chefe no HMT'}};

    console.log(pessoa.imprimeEmpresa());
