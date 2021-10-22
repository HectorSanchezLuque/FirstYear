function descuento(precio) {
    a = readlineSync.questionInt("Que valor de descuento deseas aplicar? ")
    if (a > 20 || a < 0) {
        return "No es posible aplicar ese descuento"
    } else {
        a = a / 100
        precio = precio * a;
    }
    return precio;
}

function iva(precio) {
    precio = precio * 0.16;
    return precio;
}

let readlineSync, precio;

readlineSync = require("readline-sync");


do {

    precio = readlineSync.questionInt("Cuanto vale el producto? ");
    if (precio > 0) {

        precio = precio - (descuento(precio));
        precio = precio + (iva(precio));        
        console.log("El precio final es: " + precio);
        
    }
} while (precio !== 0);