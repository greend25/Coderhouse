




alert (`DOLCI VEGAN - Opciones disponibles 25 y 26 de febrero:
// * Lemon Pie (8 porciones) $2100 
// * Marquisse Franui (8 porciones) $3000`)

const lemon = 2100
const franui = 3000

function multi (a, b) {
    return a * b}

let cantFranui
let cantLemon
let suma = 0

while (true) {
    cantLemon = parseInt(prompt("Elija la cantidad de unidades de Lemon Pie. Máximo 3"))
    if (parseInt(cantLemon) > 3 || parseInt(cantLemon) < 0) {
        alert("Ingrese un número válido")
    }

    else {
    let precioLemon = multi(lemon, cantLemon);
    alert(`Seleccionó ${cantLemon} Lemon Pie por $${precioLemon}`);
    cantFranui = parseInt(prompt("Elija la cantidad de unidades de Marquisse Franui. Máximo 3")) 
    if (cantFranui > 3 || cantFranui < 0) {
        alert("Ingrese un número válido")
    }

    else {
        suma = cantLemon + cantFranui
        let precioFranui = multi(franui, cantFranui);
        alert(`Seleccionó ${cantFranui} Marquisse Franui por $${precioFranui}`);
        suma++ 
        let total = precioLemon + precioFranui
        alert(`El total de su pedido es de $${total}`)
    }
    }
    
}
