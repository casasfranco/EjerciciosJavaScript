/**
 * Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
 */

let num = prompt("Ingrese un numero", 0);
let suma = num;

if (!isNaN(num)) {
  //Compruebo que se ingresó un numero en primera instancia

  while ((respuesta = confirm("Desea continuar ingresando numeros?. \nPulse cancelar para salir. \nPulse OK para continuar"))) {
    num = prompt("Ingrese un numero", 0);
    if (!isNaN(num)) {
      suma = parseInt(suma) + parseInt(num);
    } else {
      alert("No ingresaste un numero valido.");
    }
  }
  document.write("Resultado: " + suma);
} else {
  alert("No ingresaste un numero valido.");
}
