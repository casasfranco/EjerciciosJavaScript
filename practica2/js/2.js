/**
 * 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar a calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un numero que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el numero ingresado no es válido mostrar el mensaje “Introduce un número válido”.

 */

 let num = prompt("Ingrese su nota",0);

 if((!(isNaN(num)))) {  //Si se ingreso un numero
    SourceBuffer
    console.log("Entre aqui");
    
    if(num >= 0 && num <= 10) {      //Si ese numero esta dentro del rango

        if(num >= 0 && num <= 2) {
            alert("Muy deficiente");
        } else if(num >= 3 && num <= 4) {
            alert("Insuficiente");
        } else if(num >= 5 && num <= 6) {
            alert("Suficiente");
        } else if(num == 7) {
            alert("Bien");
        } else if(num >= 8 && num <= 9) {
            alert("Notable");
        } else if(num == 10) {
            alert("Sobresaliente");
        } 


    }



 } else {
    alert("Ingresaste un valor no valido");
}