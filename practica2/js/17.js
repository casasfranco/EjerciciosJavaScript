/**
 * 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
 */

let texto = prompt("Ingrese un texto");

texto = texto.toLowerCase();   //Convierto a minusculas

for(let i = 0; i < texto.length; i++) {
    let caracter = texto.charAt(i); //Obtengo el caracter
    if(caracter=='a' || caracter=='e' || caracter=='i' || caracter=='o' || caracter=='u') {  //Si ese caracter es vocal entonces sumo un resultado.
        document.write("La primera vocal se encuentra en la posicion: " + i);
        i=texto.length; //Para salir del bucle
    }
}