


alert (`DOLCI VEGAN - Opciones disponibles 12 y 13 de marzo:
* Lemon Pie (8 porciones) $2100 
* Marquisse (8 porciones) $3000`)

let productos = [];

class Producto {
    constructor(nombre, tipo, precio) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.precio = precio;
    }
}

const Lemon = new Producto ("Lemon Pie", "tarta", 2100);
const Marquisse = new Producto ("Marquisse", "torta", 3000);

productos.push(Lemon, Marquisse)
console.log(productos);

function multi (a, b) {
    return a * b}
    
    function sumar(a, b) {
       return a + b 
    }

productos.forEach ( e => {
    console.log("Precio pagando en efectivo " + precioConDescuento(e.precio));
})

function precioConDescuento(precio) {
    return precio - (precio * 0.10)
}

let lemonEfectivo = precioConDescuento(Lemon.precio)
let marquisseEfectivo = precioConDescuento(Marquisse.precio)

do {
    let cantLemon = prompt("Ingrese cuántos Lemon Pie desea encargar - en números")
    let cantMarquisse = prompt("Ingrese cuántas Marquisse desea encargar - en números")
    

let totalLemon = multi(Lemon.precio, cantLemon)
let totalMarquisse = multi(Marquisse.precio, cantMarquisse)

let total = sumar(totalLemon, totalMarquisse)

var pago = parseInt(prompt(`El total es de $${total}. Cómo va abonar? 1 - EFECTIVO / 2 - OTRO MEDIO DE PAGO`)) 
if (pago == 2) {
    alert("Su pedido ha sido confirmado")
}
else {
    let totalLemonE = multi(lemonEfectivo, cantLemon)
    let totalMarquisseE = multi(marquisseEfectivo, cantMarquisse)
    let totalEfectivo = sumar(totalLemonE, totalMarquisseE)

    alert(`El total en efectivo es de $${totalEfectivo}. Su pedido ha sido confirmado`)
}

var terminar = prompt('1 - finalizar\n2 - empezar de nuevo');
  
} while (terminar == 2);



