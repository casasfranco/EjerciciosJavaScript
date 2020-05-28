/**
 * 3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
 * La fórmula del perímetro  es p = 2*(a +b)
 */

let perimetro = 0;

function Perimetro(a, b) {
  perimetro = 2 * (a + b);
  return perimetro;
}

let a = parseInt(prompt("Ingrese la altura del rectangulo"));
let b = parseInt(prompt("Ingrese el largo de la base del rectangulo"));

document.write(Perimetro(a,b));