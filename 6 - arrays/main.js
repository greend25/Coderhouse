let productos = [];
do {
    let nombre = prompt('ingrese nombre de producto');
    let tipo = prompt('Ingrese la categoría del producto: Torta, Tarta, Otro')
    let precio = parseInt(prompt('ingrese precio en numeros'));
    var terminar = prompt('1 - finalizar\n2 - ingresar nuevo');

    class producto {
        constructor(nombre, precio) {
            this.nombre = nombre;
            this.tipo = tipo;
            this.precio = precio;
        }
        //   descuento() {
        //    this.precio = this.precio - (this.precio * 0.10) 
        //      }
    }

    function crear() {
        let crear = new producto(nombre, precio)
        productos.push(crear);
    }

    crear()
} while (terminar == 2);

console.log(productos);

for (let i = 0; i < productos.length; i++) {
    console.log(i, productos[i]);
    
}
