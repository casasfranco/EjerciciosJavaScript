/**
 * 1- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar.
 * Mostrar por pantalla el resultado devuelto por la función.
 */

 let num = parseInt(prompt("Ingrese un numero", ""));


function Paridad(numero) {
  let resultado = "";
    if(numero%2 == 0) {
        //Es par
        resultado = "Es par"
    } else {
        resultado = "Es impar"
    }
  return resultado;
}

document.write(Paridad(num));