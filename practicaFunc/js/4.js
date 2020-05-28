/**
 * 4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
 */

function TablaDeMultiplicar(numero) {
  let resultado = 0;
  for (let i = 1; i <= 10; i++) {
    resultado = i * numero;

    document.write(`<br> ${numero}x${i} = ${resultado}`);
    resultado == 0;
  }
}

let numero = parseInt(prompt("Ingrese un numero", ""));

TablaDeMultiplicar(numero);