/*function mensaje() {
  var saludo = "de pana";
  var antisaludo = "no muy pana";
  var saludovich = true;
  if (saludovich === true) {
    console.log(saludo);
  } else {
    console.log(antisaludo);
  }
}
mensaje();

var nombres = ["Lorenzo, Loro, Leo"];
function mensaje(nombre) {
  console.log("Hola" + nombre);
}
nombres.forEach(function(valor) {
  mensaje(valor);
});
var coche = {
  marca: "ford",
  modelo: "fiat1",
  motor: "eléctrico",
  acelerar: function() {
    console.log("brmmmmmPrararprapra");
  }
};
coche.
var encabezado = document.querySelector("h1");
encabezado.textContent="De pana"

function cambiaColor() {
  this.classList.toggle("cambia");
}
document.querySelector("body").addEventListener("click", cambiaColor);
function saludar(mensaje, nombre) {
  console.log(mensaje + nombre);
}
function recogeDatos(evento) {
  event.preventDefault();
  var nombre = document.querySelector("#nombre").value;
  var fecha = document.querySelector("#fecha").value;
  var edad = 2020 - fecha;
  console.log("hola, " + nombre + ", tu edad es de " + edad + " años");
}
var miForm = document.querySelector("#formulario");
miForm.a/*al crear una variable refiriéndose a la parte del documento html formulario
nos ahorramos seleccionar dicha parte en un event listener
function cambiaColor() {
  this.classList.toggle("formulariovich");
}
document.querySelector("form").addEventListener("click", cambiaColor);
== no diferencia entre tipos, === diferencia entre tipos y valores
*/
/*
function edadovich() {
  var depanaso = document.querySelector("#edadovich");
  depanaso.textContent = "depana";
}
*/
function recogeDatos(evento) {
  evento.preventDefault();
  var nombre = document.querySelector("#nombre").value;
  var fecha = document.querySelector("#fecha").value;
  var edad = 2020 - fecha;
  var bienvenida = document.querySelector("#bienvenido");
  var depanasiacadea;
  var mensaje;
  if (edad > 18) {
    var depanasiacadea = "Na wacho sos re viejardo";
  } else if (edad === 16) {
    var depanasiacadea = "Dea ni que fueras giuliano  ";
  } else {
    var depanasiacadea = "Dea ni que fueras charles  ";
  }
  mensaje =
    "<p> hola," +
    nombre +
    ", tienes " +
    edad +
    " años, " +
    depanasiacadea +
    "</p>";
  bienvenida.innerHTML = mensaje;
}
var myForm = document.querySelector("#formulario");
myForm.addEventListener("submit", recogeDatos);
