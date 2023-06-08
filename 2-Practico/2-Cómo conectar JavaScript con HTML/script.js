
const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafo1 = document.querySelector("parrafo1");
const parrafo2 = document.getElementById("parrafo2");
const input = document.querySelector("input");

console.log({
  h1,
  p,
  parrafo1,
  parrafo2,
  input,
});

/* Escribiendo HTML desde JavaScript */

h1.innerHTML = "Escribiendo HTML desde JavaScript";

input.value = "Fede"

/* crear elemento */

const img = document.createElement("img");
img.setAttribute(
  "src",
  "https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519_1280.jpg"
);
console.log(img);
parrafo2.append(img);