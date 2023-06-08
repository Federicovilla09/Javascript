const h1 = document.querySelector('h1');
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResultado = document.querySelector("#resultado");

/* addEventListener */
form.addEventListener('submit', sumarInputValeus);

function sumarInputValeus() {
  event.preventDefault(); /* para que el form no se recargue */
  const sumaInput = parseInt(input1.value) + parseInt(input2.value);

  pResultado.innerText = "Resultado: " + sumaInput;
}