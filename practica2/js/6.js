/**
 * Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….

 */

 let bandera = 1;
 //Repito hasta 30 veces
 for(let k = 1; k <= 30; k++) {
    //Repito la cantidades de veces que k represente
    while(bandera <= k) {
        document.write(k);
        bandera++;
    }
    //Vuelvo a 1 para comenzar una nueva fila
    bandera = 1;
    document.write("<br/>")
 }