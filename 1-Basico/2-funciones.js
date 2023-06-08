/* Funciones
  son un conjunto de sentencias que podemos utilizar para generar ciertas acciones con los valores
  que se guardaron en memoria */
  
/*Declarativas */

function miFuncion () {
  return 3;
}

miFuncion();

/* ejemplos */

function saludarEstudiantes(estudiante) {
  console.log(`Hola estudiante: ${estudiante}`);
}

saludarEstudiantes("Diego");

/* ejemplos */

function suma(a, b) {
  let resultado = a + b;
  return resultado;
}
suma(20, 30);

/* ejemplos */

function solution(valor) {
  return typeof valor;
}

solution(1);
solution("Fede");
solution(true);

/* Expresion o anonimas */

let miFuncion = function (a,b) {
  return a + b;
}

miFuncion();