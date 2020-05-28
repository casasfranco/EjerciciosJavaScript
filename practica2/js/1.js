/**
 * 
1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
 */

let age = prompt("Por favor, ingrese su edad");

//isNaN --> true en caso de NO ser numero
//isNaN("string") ---> true
//isNaN(18) ---> false

if (!(isNaN(age))) {
  if (age >= 18) {
    alert("Ya podes conducir capo");
  } else {
    alert("Te falta todavia");
  }
} else {
    alert("Ingresaste un valor no valido");
}

/*

while (!(Number.isInteger(age))) {
  alert("Ingresaste un valor no valido");
  age = prompt("Por favor, ingrese su edad");
}
*/
