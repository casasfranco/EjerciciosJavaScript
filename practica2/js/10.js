/**
 * Realiza un script que pida número de filas y columnas y escriba una tabla.
 * Dentro cada una de las celdas deberá escribirse un número consecutivo en orden descendente.
 * Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
 */

let numFilas = parseInt(prompt("Por favor, ingrese un numero de filas"));
let numColumnas = parseInt(prompt("Por favor, ingrese un numero de columnas"));
let numero = numFilas*numColumnas;

for (let i = 0; i < numFilas; i++) {
  //Recorro las filas

  for (let k = 0; k < numColumnas; k++) {
    //Recorro las columnas
    document.write("  " + numero + "     |");
    numero--;
  }
  
  document.write("<br />");
  document.write("_______________________________________");
  document.write("<br />");
}
