/* Es una estructura de datos que guarda mas valores adentro */

/* estructura */

let frutas = ["Manzana", "Bananas", "Frutillas", "Uva"];

console.log(frutas.length); /* longitud */
console.log(frutas[0]); /* posicion */

let masFrutas = frutas.push("Naranja") /* añadir un nuevo elemento al arrays */

console.log(frutas);

let ultimo = frutas.pop("Naranja"); /* elimina el ultimo elemento */
console.log(frutas);

let nuevaLista = frutas.unshift("Sandia"); /* añade un nuevo elemento pero al inicio */
console.log(frutas);

let borrarFrutas = frutas.shift("Sandia"); /* elimina el primer elemento */
console.log(frutas);

let posicion = frutas.indexOf("Frutillas"); /* nos da el indice del arrays */
console.log(posicion);

