/**
 * 2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
 * A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
 */

let texto = prompt("Ingrese una cadena de texto", "");
let banderaUpper = 0,
  banderaLower = 0;

let resultado = "";

function UpperLowerCase(cadena) {
  //Recorro la cadena
  for (let i = 0; i < cadena.length; i++) {
    let caracter = cadena.charAt(i); //Obtengo el caracter

    if (caracter.toUpperCase() == caracter) {
      //Si ese caracter es igual al caracter en mayusculas.
      banderaUpper++;
    } else if (caracter.toLowerCase() == caracter) {
      //Si ese caracter es igual al caracter en minusculas.
      banderaLower++;
    }
  }

  //Compuebo los resultados obtenidos
  if (banderaUpper != 0 && banderaLower != 0) {
    //Ambos presentes
    resultado = "Contiene mayusculas y minusculas";
  } else if (banderaUpper != 0 && banderaLower == 0) {
    //Contiene mayusculas
    resultado = "Contiene mayusculas";
  } else {
    //Contiene minusculas
    resultado = "Contiene minusculas";
  }

  return resultado;
}

document.write(UpperLowerCase(texto));
