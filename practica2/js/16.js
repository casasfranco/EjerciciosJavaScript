/**
 * 16- Realiza un script que pida una cadena de texto y la devuelva al revés. 
 * Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
 */


let texto = prompt("Ingrese un texto");

let aux="", caracter;

for(let i = texto.length; i >= 0 ; i--) {
    let caracter = texto.charAt(i); //Obtengo el caracter
    aux = aux + caracter;
}

document.write(aux);