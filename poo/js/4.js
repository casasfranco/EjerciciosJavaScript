/**
 * Producto
4- Escribe una clase Producto para crear objetos.
Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
 */

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  //Metodos
  toString() {
    document.write(`<br>Informacion sobre el prodcuto <br>`);
    document.write(
      `Codigo: ${this.codigo}<br> Nombre: ${this.nombre}<br> Precio: ${this.precio}<br>`
    );
  }
}

//Funcion para mostrar el contenido de un array de tipo Producto
function MostrarArrayProducto(producto) {
  for (let i = 0; i < producto.length; i++) {
    producto[i].toString();
  }
}

let arrayProducto = [];
arrayProducto.push(new Producto("123AA", "KitKat", "40"));
arrayProducto.push(new Producto("0800PAPITAS11", "Papa frita", "65"));
arrayProducto.push(new Producto("002COCA", "Coca Cola 2Lts", "120"));

MostrarArrayProducto(arrayProducto);