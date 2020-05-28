/**
 * 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
 */

let num = prompt("Escriba un numero", 0);

if (num % 2 == 0) {
    document.write("El numero " + num + " es divisible por 2" + "<br/>");
} 
if(num % 3 == 0) {
    document.write("El numero " + num + " es divisible por 3" + "<br/>");
} 
if(num % 5 == 0) {
    document.write("El numero " + num + " es divisible por 5" + "<br/>");
}
if(num % 7 == 0) {
    document.write("El numero " + num + " es divisible por 7" + "<br/>");
}
