function descuento(a) {
    a = readlineSync.questionInt("Que valor de descuento deseas aplicar? ")
    if (a > 20 || a < 0) {
        return "No es posible aplicar ese descuento"
    } else {
        a = a / 100
        pregunta = pregunta * a;
    }
    return pregunta;
}

function iva(precio) {
    precio = precio * 0.16;
    return precio;
}

let readlineSync, a, b, pregunta, precio;

readlineSync = require("readline-sync");


do {

    pregunta = readlineSync.questionInt("Cuanto vale el producto? ");
    if (pregunta > 0) {

        precio = pregunta
        pregunta = descuento(pregunta);

        precio = precio - pregunta
        precioTotal = precio

        precio = iva(precio);
        precioTotal = precioTotal + precio;
        
        console.log("El precio final es: " + precioTotal);

    }



} while (pregunta !== 0);