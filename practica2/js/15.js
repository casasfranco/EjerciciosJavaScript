/**
 * Realiza un script que cuente el número de vocales que tiene un texto
 */

let texto = prompt("Ingrese un texto");

texto = texto.toLowerCase();   //Convierto a minusculas
let bandera = 0;

for(let i = 0; i < texto.length; i++) {
    let caracter = texto.charAt(i); //Obtengo el caracter
    if(caracter=='a' || caracter=='e' || caracter=='i' || caracter=='o' || caracter=='u') {  //Si ese caracter es vocal entonces sumo un resultado.
        bandera++;
    }
}
document.write("Se encontraron " + bandera + " vocales");