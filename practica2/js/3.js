/**
 * Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
 */

 let cadena = prompt("Escriba aqui el texto");

 while (respuesta = confirm("Desea continuar ingresando texto? Pulse cancelar para salir.")) {
    cadena = cadena + "-" +prompt("Escriba aqui el texto");
 }

 document.write(cadena);


 console.log("saliste");
 