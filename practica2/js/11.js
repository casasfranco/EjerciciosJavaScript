/**
 * 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *
 */

let nombre1 = prompt("Ingrese un numbre.");
let edad1 = prompt("Ingrese la edad de " + nombre1 + " por favor");
let nombre2 = prompt("Ingrese un numbre.");
let edad2 = prompt("Ingrese la edad de " + nombre2 + " por favor");
let nombre3 = prompt("Ingrese un numbre.");
let edad3 = prompt("Ingrese la edad de " + nombre3 + " por favor");

//Convierto a enteros
edad1 = parseInt(edad1);
edad2 = parseInt(edad2);
edad3 = parseInt(edad3);

if (edad1 > edad2) {
  if (edad1 > edad3) {
    document.write(nombre1 + " es el mayor");
  } else {
    document.write(nombre3 + " es el mayor");
  }
} else if (edad2 > edad1) {
  if (edad2 > edad3) {
    document.write(nombre2 + " es el mayor");
  } else {
    document.write(nombre3 + " es el mayor");
  }
}