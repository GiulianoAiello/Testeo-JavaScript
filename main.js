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
  if (nombre === "") {
    var bienvenido = document.querySelector("#bienvenido");
    var mensaje =
      "<p>Debes completar los espacios en blancos antes de continuar</p>";
    bienvenido.innerHTML = mensaje;
  } else {
    if (edad >= 8) {
      if (edad === 16) {
        var giuliano = "na, vos sos yo?";
      } else {
        var giuliano = "";
      }
      var bienvenido = document.querySelector("#bienvenido");
      var mensaje =
        "<p>Hola, " +
        nombre +
        " tienes " +
        edad +
        " años, " +
        giuliano +
        "</p>";
      bienvenido.innerHTML = mensaje;
    } else {
      var bienvenido = document.querySelector("#bienvenido");
      var mensaje =
        "<p>No cumples con la edad mínima de 8 años para acceder al sitio web</p>";
      bienvenido.innerHTML = mensaje;
    }
  }
  // EJERCICIO: declara las variables necesarias (puedes necesitar
  // más de una) para componer el mensaje de bienvenida

  // EJERCICIO: crea un condicional que dé un mensaje u otro en
  // función de la edad

  // BONUS: si quieres, puedes comprobar si alguno de los campos
  // está vacío y modificar el mensaje de bienvenida para pedir
  // Que se rellene

  // EJERCICIO: Realiza la composició del mensaje final y cárgalo
  // en la variable que hayas preparado

  // EJERCICIO: Añade el mensaje final como contenido HTML del
  // nodo que hemos cargado en la variable bienvenida
}

var miForm = document.querySelector("#formulario");

miForm.addEventListener("submit", recogeDatos);
