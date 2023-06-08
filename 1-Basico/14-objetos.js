/* let miAuto = {
  marca: "toyota",
  modelo: "corolla",
  annio: 2020
};
/* Para acceder a los valores de los objetos */
/* miAuto.marca */ 

let miAuto = {
  marca: "toyota",
  modelo: "corolla",
  annio: 2020,
  detalleDeAuto: function(){
    console.log(`Auto ${this.modelo}`)
  }
};
miAuto.detalleDeAuto();

/* El this hace referencia al objeto globar, por ejempo miAuto */

