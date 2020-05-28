/**
 * Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
 */

 let num1 = parseInt(prompt("Escriba un numero: ", 0));
 let num2 = parseInt(prompt("Escriba un numero: ", 0));


 if(num1 > num2) {
    document.write(num1 + " es mayor que " + num2);
 } else {
    document.write(num2 + " es mayor que " + num1);
 }