

let productos = [];
console.log(localStorage.getItem('productos'));

class Producto {
    constructor(code, nombre, tipo, precio, image, inCart) {
        this.code = code;
        this.nombre = nombre;
        this.tipo = tipo;
        this.precio = precio;
        this.image = image;
        this.inCart = inCart; //cantidad de veces que está el producto en el carrito
    }
}

let contenedorCarrito = document.getElementById("carrito");
let carrito = []

const image = document.createElement("img")

const Vruce = new Producto ("vru", "Vruce", "torta", 3100, image.src = "/media/IMG_E4589 2.png", 0);
const Cabsha = new Producto ("cab","Cabsha", "tarta", 2800, image.src = "media/IMG_E4360 2.png", 0);
const Cumple = new Producto ("hb","Torta de Cumpleaños", "torta", 2400, image.src = "/media/IMG_6901 2.png", 0);
const Franui = new Producto ("fra", "Marquisse Franui", "torta", 3000, image.src = "/media/IMG_E4328 2.png", 0);
const Lemon = new Producto ("lpie","Lemon Pie", "tarta", 2100, image.src = "/media/IMG_E1603 2.png", 0);
const Choco = new Producto ("chot","Chocotorta", "torta", 2800, image.src = "/media/EMPL8952 2.png", 0);

productos.push(Vruce, Cabsha, Cumple, Franui, Lemon, Choco)

// guardar productos en el storage
localStorage.setItem('productos', JSON.stringify(productos))

// PINTAR PRODUCTOS EN DOM
const divContainer = document.getElementById("items_div")

productos.forEach ( x => {
    let itemElement = document.createElement("div")
    itemElement.className = "single-item"

    itemElement.innerHTML = 
        `<div class="row">
        <div class="col-12 col-md-6">
        <div class="item shadow mb-4">
        <img class="item-image" src="${x.image}">
        <div class="item-details">
        <h3> ${x.nombre} </h3>
        <p> $${x.precio} </p>
        <button id="${x.code}" class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
        </div>
        </div>
        </div>
        </div>  `
    
    divContainer.appendChild(itemElement)
})

// contacto con los botones DOM
let carts = document.querySelectorAll(".item-button")

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
        cartNumbers(productos[i]);
        totalCompra(productos[i]);
        addItemToCart();
         
        
    }) 
}




// recupera y muestra la cantidad de productos almacenados en el carrito
function storageCartNumbers() {
    let productsNumbers = localStorage.getItem("cartNumbers");

    if (productsNumbers) {
        document.querySelector(".cart").textContent = productsNumbers;
    }
}

// suma la cantidad de productos en el carrito y lo guarda en storage
function cartNumbers(product) {
    let productsNumbers = localStorage.getItem("cartNumbers");
    
    productsNumbers = parseInt(productsNumbers);

    if(productsNumbers) {
        localStorage.setItem("cartNumbers", productsNumbers + 1);
        document.querySelector(".cart").textContent = productsNumbers + 1;
    }else{
        localStorage.setItem("cartNumbers", 1);
        document.querySelector(".cart").textContent = 1;
    }

    setItems(product)
}

//suma la cantidad de cada producto en el carrito y guarda en storage
function setItems(product) {
    //chequear si existe otro item en el carrito en el storage
    let cartItems = localStorage.getItem("productosEnCarrito");
    cartItems = JSON.parse(cartItems)

    if (cartItems != null) {
        if (cartItems[product.code] == undefined) {
            cartItems = {
                ...cartItems, //spread operator para pasar de un array a una lista de argumentos
                [product.code]: product
            }
        }
        cartItems[product.code].inCart += 1;
    }else{
        product.inCart = 1;
        cartItems = {
            [product.code]: product
        }
    }

    localStorage.setItem("productosEnCarrito", JSON.stringify(cartItems))
}

// sumar el total de la compra
function totalCompra(product) {
    let storedTotal = localStorage.getItem("totalCompra"); 
    //verifica si hay otro total almacenado en el storage
    if (storedTotal != null) {
        storedTotal = parseInt(storedTotal);
        localStorage.setItem("totalCompra", storedTotal + product.precio);
    }else{
        localStorage.setItem("totalCompra", product.precio);
    } 
    
}

var entrega = dayjs().add(3, 'day')
console.log(entrega.format("DD/MM"))

// AÑADIR AL CARRITO
function addItemToCart(id) {
    Toastify({
        text: `Añadido al carrito. Listo para retirar el ${entrega.format("DD/MM")}`,
        duration: 2000,
        gravity: "bottom",
        position: "right",
        newWindow: true,
        style: {
            background: " #f8c097",
          },
    }).showToast();

    const carritoDOM = document.getElementById("carrito")
    const nuevoProducto = document.createElement("ul")
    const selItem = productos.find(f => f.code === id)

    nuevoProducto.innerText = (`${selItem.nombre} - $${selItem.precio}`)
    carritoDOM.appendChild(nuevoProducto)
}


function displayCart() {
    let cartItems = localStorage.getItem("productosEnCarrito"); //recupera los productos del carrito almacenados en el storage
    cartItems = JSON.parse(cartItems);
    let productsContainer = document.getElementById("carrito");
    let storedTotal = localStorage.getItem("totalCompra"); 
    

    console.log(cartItems);
    if (cartItems) {
        productsContainer.innerHTML = '';
        Object.values(cartItems).map( item => {
            productsContainer.innerHTML += `
            <div class="products">
                <div class="product">
                    <ion-icon name="close-outline" id="remove"></ion-icon>
                    <ul>${item.nombre} - $${item.precio}</ul>
                </div>
            <div class="quantity">
                <ion-icon name="caret-back-circle-outline"></ion-icon>
                 x ${item.inCart}
                 <ion-icon name="caret-forward-circle-outline"></ion-icon>
            </div>
            <div class="total">
                $${item.inCart * item.precio}
            </div>
            </div>
            `
        });

        productsContainer.innerHTML += `
            <div class="totalContainer">
                <h4 class="totalTitle">
                    Total del carrito
                </h4>
                <h4 class ="totalCarrito">
                    $${storedTotal}
                </h4>
            </div>
        `
    }
}



storageCartNumbers();
displayCart();