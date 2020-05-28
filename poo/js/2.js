/**
 * Cuenta bancaria
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 
Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
 */

class CuentaBancaria {
  constructor(titular) {
    this.titular = titular;
    this.saldo = 0;
  }

  //Metodos
  Ingresar(dinero) {
    this.saldo = this.saldo + dinero;
  }

  Extraer(dinero) {
    this.saldo = this.saldo - dinero;
  }

  Informar() {
      document.write(` ----- Cuenta Bancaria ------ <br> Titular: ${this.titular} <br> Saldo: ${this.saldo} <br>`);
      
  }
}


let cuenta = new CuentaBancaria("Alex");
cuenta.Informar();
cuenta.Ingresar(1000);
cuenta.Extraer(253);
document.write("<br>____________________________ <br>");
document.write("<br>");
cuenta.Informar();