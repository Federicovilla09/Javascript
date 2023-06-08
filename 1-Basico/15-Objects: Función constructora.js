function auto(marca, modelo, annio){
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}
let autoNuevo = new auto("Tesla","Modelo 3", 2020 );
autoNuevo()