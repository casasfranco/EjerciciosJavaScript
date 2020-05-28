/**
 * Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
 */

let num = prompt("Ingrese un numero menor o igual a 50");
let bandera = 1;

if(num>= 0 && num <= 50) {

    for(let k = num; k > 0; k--) {
        //Repito la cantidades de veces que k represente
        while(bandera <= k) {
            document.write(k);
            bandera++;
        }
        //Vuelvo a 1 para comenzar una nueva fila
        bandera = 1;
        document.write("<br/>")
     }
}