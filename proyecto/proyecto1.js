const items = document.getElementById('items')
const carritoDOM = document.getElementById("carrito")
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const itemsCarrito = document.getElementById('items-carrito')
const footer = document.getElementById('footer')
const carritoNav = document.querySelector(".cart")
const fragment = document.createDocumentFragment()
const header = document.querySelector(".info")

let carrito = {}

var entrega = dayjs().add(3, 'day') // librería Day JS para mostrar a partir de cuando estará listo para retirar el pedido

document.addEventListener('DOMContentLoaded', e => { 
    fetchData() 
    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito")) //recupera los productos del carrito almacenados en el storage
        pintarCarrito()
    }
    Swal.fire({ // librería sweet alert para mostrar un mensaje de información sobre como realizar el pedido
        title: 'Hola! Hacé tu padido en tres simples pasos:',
        icon: "info",
        iconColor: "#f8c097",
        text: '1. Elegí los productos de quieras. 2. Revisá y completá tu pedido. 3. Listo! Generamos tu pedido.',
        width: 600,
        padding: '3em',
        color: '#842517',
        confirmButtonColor: '#842517',
      })
});

items.addEventListener("click", e => {
    addCart(e)
})

itemsCarrito.addEventListener("click", e => {
    accionBtn(e)
})

const fetchData = async() => { // cargar los productos desde un archivo json
    const res = await fetch('data.json');
    const data = await res.json()
    pintarDom(data)
}

// Uso de libreria Day JS para mostrar la fecha de entrega
header.innerHTML = ` Agenda abierta! Tu pedido estará listo para retirar el ${entrega.format("DD/MM")}`

// Pintar productos
function pintarDom(products) {
    items.innerHTML = null
        products.forEach (p => {
            let itemElement = document.createElement("div")
            itemElement.className = "single-item"

            itemElement.innerHTML = 
            `<div class="row">
            <div class="col-12 col-md-6">
            <div class="item shadow mb-4">
            <img class="item-image" src="${p.image}">
            <div class="item-details">
            <h3> ${p.nombre} </h3>
            <p> ${p.precio} </p>
            <button data-id="${p.id}" class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
            </div>
            </div>
            </div>
            </div>  `
            items.appendChild(itemElement)
        });
    }

// agregar productos al carrito
const addCart = e => {
    if (e.target.classList.contains("btn-primary")) {
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

// mostrar en el carrito los productos 
const setCarrito = objeto => {
    console.log(objeto);
    const producto = {
        id: objeto.querySelector("button").dataset.id,
        nombre: objeto.querySelector("h3").textContent,
        precio: objeto.querySelector("p").textContent,
        cantidad: 1
    }
    if (carrito.hasOwnProperty(producto.id)) { 
        producto.cantidad = carrito[producto.id].cantidad++
    }

    carrito[producto.id] = {...producto}
    pintarCarrito()
}

// pintar carrito
const pintarCarrito = () => {

    itemsCarrito.innerHTML = null

    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector("th").textContent = producto.id
        templateCarrito.querySelectorAll("td")[0].textContent = producto.nombre
        templateCarrito.querySelectorAll("td")[1].textContent = producto.cantidad
        templateCarrito.querySelector("span").textContent = producto.cantidad * producto.precio // total de cada producto
        Swal.fire({ 
            title: `Añadiste un producto al carrito`,
            icon: "success",
            iconColor: "#f8c097",
            width: 600,
            padding: '3em',
            color: '#842517',
            confirmButtonColor: '#842517',
          })

         //botones aumentar y disminuir cantidad
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
       
        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)

        
    })
    
    itemsCarrito.appendChild(fragment)
    pintarFooter()

    localStorage.setItem("carrito", JSON.stringify(carrito))//almacenar en local storage
}

const pintarFooter = () => {
    footer.innerHTML = null
    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío </th>
        `
        return
    }

    // sumar cantidad y sumar totales
    const nCantidad = Object.values(carrito).reduce((acc, {cantidad}) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + parseInt(precio) * parseInt(cantidad), 0) 

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad // cantidad de productos en el carrito
    templateFooter.querySelector('span').textContent = nPrecio // total del carrito
    carritoNav.textContent = nCantidad // muestra cantidad de productos en la barra de navegación

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)

    footer.appendChild(fragment)

    const botonVaciar = document.querySelector('#vaciar-carrito')
    botonVaciar.addEventListener('click', () => {
        carrito = {}
        pintarCarrito()
    })
}

//funcionalidad de los botones aumentar y disminuir cantidad
const accionBtn = e => {

    if (e.target.classList.contains("btn-info")) {

        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        carrito[e.target.dataset.id] = {...producto}
    }
    if (e.target.classList.contains("btn-danger")) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if (producto.cantidad === 0) {
            delete carrito[e.target.dataset.id]
        }
    }

    pintarCarrito()
}

