/**
 * Generaciones
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento
Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

 */

class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, anioNac, nacionalidad) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNac = anioNac;
    this.nacionalidad = nacionalidad;
    this.generacion = this.determinarGeneracion(this.anioNac);
  }

  //Metodos

  //debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación
  mostrarGeneracion() {
    let razgo = this.determinarRazgoCaracteristico(this.generacion);
    document.write(`<br> Razgo caracteristico: ${razgo}`);
  }

  //determina a que generacion pertenece
  determinarGeneracion(anio) {
    if (anio >= 1930 && anio <= 1948) {
      //Silent Genereation
      return 0;
    } else if (anio >= 1949 && anio <= 1968) {
      //Baby Boom
      return 1;
    } else if (anio >= 1969 && anio <= 1980) {
      //Generacion X
      return 2;
    } else if (anio >= 1981 && anio <= 1993) {
      //Generacion Y millennials
      return 3;
    } else if (anio >= 1994 && anio <= 2010) {
      //Generacion Z
      return 4;
    } else {
      alert("No pertenece a ninguna generacion");
    }
  }

  //devuelve el razgo caracteristico de su generacion
  determinarRazgoCaracteristico() {
    let razgo = "";
    switch (this.generacion) {
      case 0:
        razgo = "Austeridad";
        break;
      case 1:
        razgo = "Ambición";
        break;
      case 2:
        razgo = "Obsesión por el éxito";
        break;
      case 3:
        razgo = "Frustración";
        break;
      case 4:
        razgo = "Irreverencia";
        break;
      default:
        razgo = "";
        break;
    }

    return razgo;
  }

  //indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad
  esMayorDeEdad() {
    if (this.edad >= 18) {
      return document.write("Es mayor de edad");
    } else {
      return document.write("No es mayor de edad");
    }
  }

  //devuelve toda la información del objeto.
  mostrarDatos() {
    document.write(`<br>Nombre: ${this.nombre} <br>Edad: ${this.edad} <br>DNI: ${this.dni} <br> Sexo: ${this.sexo}
      <br>Peso: ${this.peso}<br>Altura: ${this.altura}<br>Año: ${this.anioNac}<br>Nacionalidad: ${this.nacionalidad}`);
  }

  //genera un número aleatorio de 8 cifras.
  generaDNI() {
    let aux;
    let dni="";
    let i=0;
    do {
        aux = Math.floor(Math.random() * 9) + 1;
        dni = dni + aux;
        i++;
    } while (i < 8);
    return dni;
  }
}

let persona = new Persona(
  "Franco",
  20,
  42467356,
  "M",
  70,
  1.72,
  2000,
  "Argentino"
);
persona.mostrarGeneracion();
persona.mostrarDatos();
