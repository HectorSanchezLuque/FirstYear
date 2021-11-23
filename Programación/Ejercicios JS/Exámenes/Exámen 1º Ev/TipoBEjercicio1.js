/**
 * Función que calcula si el IVA introducido es válido (sólo será válido si es 16 o 21)
 * @param {number} iva Valor de IVA que se va a aplicar
 * @returns Devuelve una variable booleana que indica si es el valor de IVA es correcto
 */

function validaIva(iva) {

    if (iva == 16 || iva == 21) {
        correcto = true;

    } else {
        correcto = false
        console.log("El IVA introducido no es correcto");
    }
    return correcto;
}

/**
 * Función para calcular el valor de los gastos de envío basado en el precio del producto
 * @param {number} price Variable que posee el valor del producto
 * @returns Devuelve el valor de los gastos de envío
 */

function valorGEnvio(price) {

    gastosEnvio = 0;

    if (price < 500) {
        gastosEnvio = 40;

    } else if (price >= 500 && price < 999) {
        gastosEnvio = 20;

    } else if (price >= 1000) {
        gastosEnvio = 0;
    }
    return gastosEnvio;
}

/**
 * Función que calcula el precio final
 * @param {number} price Valor que tiene el producto
 * @param {number} gEnvios Precio del gasto de envío basado en el precio del producto
 * @param {number} iva Valor que se aplica a los productos (puede ser 16% ó 21%)
 * @returns Devuelve el precio final con todos los cálculos realizados
 */

function precioFinal(price, gEnvios, iva) {

    price = price + gEnvios;

    ivaDelPrecio = price * iva;

    price = price + ivaDelPrecio;

    return price;
}

let readlineSync = require("readline-sync");
let precio, gastosEnvio, valorIva;

do {
    precio = readlineSync.questionFloat("Cual es el precio del producto? ");
    if (precio > 0) {

        gastosEnvio = valorGEnvio(precio);

        valorIva = readlineSync.question("Que valor de IVA desea aplicar? ");

        if (validaIva(valorIva) == true) {

            valorIva = valorIva / 100
            console.log("El precio final es:", precioFinal(precio, gastosEnvio, valorIva), "euros");

        }
    }

} while (precio != 0);



