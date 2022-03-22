

let productos = [];
console.log(localStorage.getItem('productos'));

class Producto {
    constructor(code, nombre, tipo, precio, image) {
        this.code = code;
        this.nombre = nombre;
        this.tipo = tipo;
        this.precio = precio;
        this.image = image;
    }
}

const image = document.createElement("img")

const Vruce = new Producto ("vru", "Vruce", "torta", 3100, image.src = "/media/IMG_E4589 2.png");
const Cabsha = new Producto ("cab","Cabsha", "tarta", 2800, image.src = "media/IMG_E4360 2.png");
const Cumple = new Producto ("hb","Torta de Cumpleaños", "torta", 2400, image.src = "/media/IMG_6901 2.png");
const Franui = new Producto ("fra", "Marquisse Franui", "torta", 3000, image.src = "/media/IMG_E4328 2.png");
const Lemon = new Producto ("lpie","Lemon Pie", "tarta", 2100, image.src = "/media/IMG_E1603 2.png");
const Choco = new Producto ("chot","Chocotorta", "torta", 2800, image.src = "/media/EMPL8952 2.png");

productos.push(Vruce, Cabsha, Cumple, Franui, Lemon, Choco)

// guardar productos en el storage
localStorage.setItem('productos', JSON.stringify(productos))

// productos.forEach (e => {
//     console.log("Precio pagando en efectivo " + precioConDescuento(e.precio));
// })

// function precioConDescuento(precio) {
//     return precio - (precio * 0.10);
// }

// PINTAR PRODUCTOS EN DOM
const divContainer = document.getElementById("items_div")

productos.forEach ( x => {
    let itemElement = document.createElement("div")
    itemElement.className = "single-item"

    itemElement.innerHTML = 
        `<div class="row">
        <div class="col-12 col-md-6">
        <div class="item shadow mb-4">
        <h3> ${x.nombre} </h3>
        <img class="item-image" src="${x.image}">
        <div class="item-details">
        <p> $${x.precio} </p>
        <button id="${x.code}" class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
        </div>
        </div>
        </div>
        </div>  `
    
    divContainer.appendChild(itemElement)
})

// BOTONES
const myButtons = document.querySelectorAll(".item-button")
myButtons.forEach ( x => {
    x.addEventListener("click", e => { 
        addItemToCart(e.target.id)
        console.log(e.target.id);
    })
})

let carrito = [];
TotalCompra = 0;

// Recupera el carrito y el total del storage
const storedTotal = localStorage.getItem('total')
if (storedTotal) {
    TotalCompra = JSON.parse(storedTotal);
}

const storedCarrito = localStorage.getItem('carrito')
if (storedCarrito) {
    carrito = JSON.parse(storedCarrito);
}

// AÑADIR AL CARRITO
function addItemToCart(id) {
    const carritoDOM = document.getElementById("carrito")
    const nuevoProducto = document.createElement("ul")
    const selItem = productos.find(f => f.code === id)
    
    localStorage.setItem('carrito', JSON.stringify(selItem))

    nuevoProducto.innerText = (`${selItem.nombre} - $${selItem.precio}`)
    carritoDOM.appendChild(nuevoProducto)
    
    TotalCompra += selItem.precio
    const nuevoTotal = document.getElementById("total")
    nuevoTotal.innerText = TotalCompra
    localStorage.setItem('total', JSON.stringify(TotalCompra))
    
}



