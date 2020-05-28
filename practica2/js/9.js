/**
 * Un script que escriba los números del 1 al 500, que indique cuales son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-
6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10
 */

 
let i = 1;
while (i <= 500) {
  if (i % 4 == 0) {
    //multiplo de 4, resto es 0. Agrego salto de linea
    document.write(i + " (multiplo de 4) <br>");
  } else if (i % 9 == 0) {
    //multiplo de 9, resto es 0. Agrego salto de linea
    document.write(i + " (multiplo de 9) <br>");
  } else {
      //No es multiplo de 4 ni de 9, escribo el numero y salto de linea
    document.write(i + "<br>");
  }

  //Cada 5 lineas hago una linea horizontal. Agrego salto de linea
  if (i % 5 == 0) {
    document.write("<hr>");
  }

  i++;
}
