/**
 * Crear objetos

 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado.
 Crea los métodos necesarios para permitir encender y apagar el auto.


 OPTÉ POR CREAR DIRECTAMENTE UNA CLASE.     
 */

class Auto {
  constructor(color, marca, modelo, encendido) {
    this.color = color;
    this.marca = marca;
    this.modelo = modelo;
    this.encendido = encendido;
  }

  //Metodos
  Encender() {
    this.encendido = true;
  }
  Apagar() {
    this.encendido = false;
  }

  toString() {
    let estado = "";
    if (this.encendido == true) {
      estado = "Encendido :D";
    } else {
      estado = "Apagado :P";
    }

    document.write(`Modelo: ${this.modelo} <br>
      Marca: ${this.marca} <br>
      Color: ${this.color} <br>
      Encendido? : ${estado} <br>`);
  }
}

//Instancia del objeto

let autoDeFranco = new Auto("Rojo", "Ferrari", "SF90 Stradale", true);

autoDeFranco.toString();

autoDeFranco.Apagar();
document.write("<br>");
autoDeFranco.toString();