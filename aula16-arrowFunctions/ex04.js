let restOperator = (...parametros) => {
  console.log(parametros);
}

restOperator('teste', 'aula16', 'quinta-feira', 'javascript');


let restOperator = ({...parametros}) => {
  console.log(parametros.titulo);
  console.log(parametros.aula);
  console.log(parametros.dia);
  console.log(parametros.linguagem);
}

restOperator({titulo:'teste', aula:'aula16', dia:'quinta-feira', linguagem:'javascript'});