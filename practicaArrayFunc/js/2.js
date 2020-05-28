/**
 * 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario seleccione cancelar o ingrese el valor “0” se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

 */

let continuar, ciudad;
let array = [];
do {
  ciudad = prompt("Ingrese el nombre de una ciudad", "");
  array.push(ciudad);

  if (ciudad == "0" || ciudad == "") {
    document.write("Se ingreso 0 o vacio <br>");
    continuar = false; //Sale del bucle
  } else {
    continuar = confirm("Desea continuar?");
  }
} while (continuar == true);

document.write(`Longitud: ${array.length}`);

if (array.length >= 2) {
  //Tengo primera, segunda y tercera posicion.
  document.write(`<br>Longitud: ${array[0]} `);
  document.write(`<br>Longitud: ${array[2]}`);
  //Obtengo la ultima posicion
  let ultPosicion = array.length - 1;
  document.write(`<br>Longitud: ${array[ultPosicion]}`);
}

//Agrego Paris al final
array.push("París");
//Elemento en la segunda posicion
document.write(`<br>Longitud: ${array[1]} `);
//Sustituyo el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
array[1] = "Barcelona";