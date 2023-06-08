/* Ciclos */

let estudiantes = ["Maria", "Sergio", "Rosa", "Oscar"];
function saludarEstudiantes(estudiante) {
  console.log(`Hola, ${estudiante}`);
}
for (let i = 0; i < estudiantes.length; i++) {
  saludarEstudiantes(estudiantes[i]);
}

/* let estudiantes = ["Maria", "Sergio", "Rosa", "Oscar"];
function saludarEstudiantes(estudiante) {
  console.log(`Hola, ${estudiante}`);
}
for (let estudiante of estudiantes) {
  saludarEstudiantes(estudiante);
} */