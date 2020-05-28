/**
 * 3- Escribir un script que simule el lanzamiento de dos dados.
 * Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados.
 * Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
 */

//returns a random integer between 1 and 6 (both included):
let dado1,
  dado2,
  aux = 0;
let resultados = [],
  aparicionesDeResultados = [];

let i = 0;
//Lo que no se es: Un array con los resultados que salieron o dos arrays, uno con los resultados 
// y otro con la cantidad que aparece cada resultado.
do {
  dado1 = Math.floor(Math.random() * 6) + 1;
  dado2 = Math.floor(Math.random() * 6) + 1;
  aux = (dado1 + dado2);
} while (i < 50);
