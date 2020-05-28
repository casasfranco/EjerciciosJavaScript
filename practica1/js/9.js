/**
 * 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
 */

 let frase = prompt("Escriba una frase");
 frase = frase.toLowerCase();   //Convierto a minusculas

for(let i = 0; i < frase.length; i++) {
    let caracter = frase.charAt(i); //Obtengo el caracter
    if(caracter=='a' || caracter=='e' || caracter=='i' || caracter=='o' || caracter=='u') {  //Si ese caracter es vocal entonces muestro.
        document.write("La letra: '" + caracter + "' es una vocal <br />");
    }
}