/**
 * Rectángulos
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área.
 */

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  //Metodos
  CalcularPerimetro() {
    return 2 * (this.alto + this.ancho);
  }

  CalcularArea() {
    return this.ancho * this.alto;
  }

  //Getters and Setters
  get getAlto() {
    return this.alto;
  }
  set setAlto(alto) {
    this.alto = alto;
  }

  get getAncho() {
    return this.ancho;
  }
  set setAncho(ancho) {
    this.ancho = ancho;
  }
}

let rectangulo = new Rectangulo(10, 20);
document.write("Perimetro: " + rectangulo.CalcularPerimetro());
document.write("<br>Area: " + rectangulo.CalcularArea());
