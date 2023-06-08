/* while */

let estudiantes = ["Maria", "Sergio", "Rosa", "Oscar"];
function saludarEstudiantes(estudiante) {
  console.log(`Hola, ${estudiante}`);
}
while (estudiantes.length > 0) {
  let estudiante = estudiantes.shift();
  saludarEstudiantes(estudiante);
}