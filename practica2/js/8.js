/**
 * Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456

 */

 let num = prompt("Escriba un numero menor o igual a 50");

 let bandera = 1;
 //Repito hasta n veces
 for(let k = 1; k <= num; k++) {
    //Repito la cantidades de veces que k represente
    while(bandera <= k) {
        document.write(bandera);
        bandera++;
    }
    //Vuelvo a 1 para comenzar una nueva fila
    bandera = 1;
    document.write("<br/>")
 }