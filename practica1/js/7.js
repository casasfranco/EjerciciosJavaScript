/**
 * 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
 */

let num1 = prompt("Escriba el primer numero", 0);
let num2 = prompt("Escriba el segundo numero", 0);
let num3 = prompt("Escriba el tercer numero", 0);

//Convierto a enteros
num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);

if(num1 > num2) {    
    if(num1 > num3) {
        document.write("El numero " + num1 + " es el mayor");
    } else {
        document.write("El numero " + num3 + " es el mayor");
    }
} else if(num2 > num1) {
    if(num2 > num3) {
        document.write("El numero " + num2 + " es el mayor");
    } else {
        document.write("El numero " + num3 + " es el mayor");
    }
}
document.write("<br/> Los numeros ingresadors son: <br/>");
document.write("Primer numero: " + num1 + "<br />" + "Segundo numero: " + num2 + "<br />" + "Tercer numero: " + num3 + "<br />" );
