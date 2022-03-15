


let productos = [];

class Producto {
    constructor(nombre, tipo, precio) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.precio = precio;
    }
}

const Vruce = new Producto ("Vruce", "torta", 3100);
const Cabsha = new Producto ("Cabsha", "tarta", 2800);
const Cumple = new Producto ("Torta de Cumpleaños", "torta", 2400);
const Franui = new Producto ("Marquisse Franui", "torta", 3000);
const Lemon = new Producto ("Lemon Pie", "tarta", 2100);
const Choco = new Producto ("Chocotorta", "torta", 2800);

productos.push(Vruce, Cabsha, Cumple, Franui, Lemon, Choco)
console.log(productos);

// const DOMitems = document.querySelector('.items');
// const DOMcarrito = document.querySelector('#carrito');
// const DOMtotal = document.querySelector('#total');
// const DOMbotonVaciar = document.querySelector('#boton-vaciar');

function multi(a, b) {
    return a * b;
}
    
function sumar(a, b, c, d, e, f) {
    return a + b; 
}

productos.forEach (e => {
    console.log("Precio pagando en efectivo " + precioConDescuento(e.precio));
})

function precioConDescuento(precio) {
    return precio - (precio * 0.10);
}

let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")
let btn6 = document.getElementById("btn6")

let carrito = [];
cantFr = 0;
cantCab = 0;
cantVr = 0;
cantLe = 0;
cantCh = 0;
cantCum = 0;

btn1.addEventListener ("click", () => {
    alert(`Añadiste ${Vruce.nombre} al carrito`)
    const carritoDOM = document.getElementById("carrito")
    const nuevoProducto = document.createElement("ul")
    nuevoProducto.innerText = (`${Vruce.nombre} - $${Vruce.precio}`)
    carritoDOM.appendChild(nuevoProducto)

    const cantVr = parseInt(Vruce.precio)
    carrito.push(cantVr)
})

btn2.addEventListener ("click", () => {
    alert(`Añadiste ${Cabsha.nombre} al carrito`)
    const carritoDOM = document.getElementById("carrito")
    const nuevoProducto = document.createElement("ul")
    nuevoProducto.innerText = (`${Cabsha.nombre} - $${Cabsha.precio}`)
    carritoDOM.appendChild(nuevoProducto)

    const cantCab = parseInt(Cabsha.precio)
    carrito.push(cantCab)
})

btn3.addEventListener ("click", () => {
    alert(`Añadiste ${Cumple.nombre} al carrito`)
    const carritoDOM = document.getElementById("carrito")
    const nuevoProducto = document.createElement("ul")
    nuevoProducto.innerText = (`${Cumple.nombre} - $${Cumple.precio}`)
    carritoDOM.appendChild(nuevoProducto)

    const cantCum = parseInt(Cumple.precio)
    carrito.push(cantCum)
})

btn4.addEventListener ("click", () => {
    alert(`Añadiste ${Franui.nombre} al carrito`)
    const carritoDOM = document.getElementById("carrito")
    const nuevoProducto = document.createElement("ul")
    nuevoProducto.innerText = (`${Franui.nombre} - $${Franui.precio}`)
    carritoDOM.appendChild(nuevoProducto)

    const cantFr = parseInt(Franui.precio)
    carrito.push(cantFr)
})

btn5.addEventListener ("click", () => {
    alert(`Añadiste ${Lemon.nombre} al carrito`)
    const carritoDOM = document.getElementById("carrito")
    const nuevoProducto = document.createElement("ul")
    nuevoProducto.innerText = (`${Lemon.nombre} - $${Lemon.precio}`)
    carritoDOM.appendChild(nuevoProducto)

    const cantLe = parseInt(Lemon.precio)
    carrito.push(cantLe)
})

btn6.addEventListener ("click", () => {
    alert(`Añadiste ${Choco.nombre} al carrito`)
    const carritoDOM = document.getElementById("carrito")
    const nuevoProducto = document.createElement("ul")
    nuevoProducto.innerText = (`${Choco.nombre} - $${Choco.precio}`)
    carritoDOM.appendChild(nuevoProducto)

    const cantCh = parseInt(Choco.precio)
    carrito.push(cantCh)
})

let sum = 0;
for (let i = 0; i < carrito.length; i++) {
    sum += carrito[i];
}

const totalDom = document.getElementById("total")
const nuevoTotal = document.createElement("p")
nuevoTotal.innerText = sum
totalDom.appendChild(nuevoTotal)




// do {
//     let cantLemon = prompt("Ingrese cuántos Lemon Pie desea encargar - en números")
//     let cantMarquisse = prompt("Ingrese cuántas Marquisse desea encargar - en números")

//     let totalLemon = multi(Lemon.precio, cantLemon)
//     let totalMarquisse = multi(Marquisse.precio, cantMarquisse)

//     let total = sumar(totalLemon, totalMarquisse)

//     var pago = parseInt(prompt(`El total es de $${total}. Cómo va abonar? 1 - EFECTIVO / 2 - OTRO MEDIO DE PAGO`)) 
//         if (pago == 2) {
//         alert("Su pedido ha sido confirmado")
//             } else {
//              let totalLemonE = multi(lemonEfectivo, cantLemon)
//              let totalMarquisseE = multi(marquisseEfectivo, cantMarquisse)
//              let totalEfectivo = sumar(totalLemonE, totalMarquisseE)

//              alert(`El total en efectivo es de $${totalEfectivo}. Su pedido ha sido confirmado`)
//             }

//     var terminar = prompt('1 - finalizar\n2 - empezar de nuevo');
  
// } while (terminar == 2);



