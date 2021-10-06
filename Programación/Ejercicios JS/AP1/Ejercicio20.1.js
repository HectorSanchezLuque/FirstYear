let readLineSync = require("readline-sync");
let iva, descuento1, descuento2, descuento3, descuentoTotal, dValidos, precioConDescuentos, descuentoTotalPorcent, ivaDelPrecio, precioDescontado
dValidos = true
descuentoTotal = 0;
precioProducto = readLineSync.questionInt("¿Cual es el precio? ");

descuento1 = readLineSync.keyInYN("¿Es usted de catarroja? ");
if (descuento1 == true) {
    descuentoTotal += 0.05;
}
descuento2 = readLineSync.keyInYN("¿Cursa usted DAM? ");
if (descuento2 == true) {
    descuentoTotal += 0.05;
}
if (descuento2 == true) {
    descuento3 = readLineSync.keyInYN("¿Esta usted en el primer curso? ");
} if (descuento3 == true) {
    descuentoTotal += 0.05;
}
precioDescontado = descuentoTotal * precioProducto;
precioConDescuentos = precioProducto - precioDescontado


iva = readLineSync.questionInt("¿Que valor de IVA deseas aplicar? ");

switch (iva) {

    case 16:
        ivaDelPrecio = precioConDescuentos * 0.16;
        console.log("El precio final es: ", precioConDescuentos + ivaDelPrecio, "euros")
        break;
    case 21:
        ivaDelPrecio = precioConDescuentos * 0.21;
        console.log("El precio final es: ", precioConDescuentos + ivaDelPrecio, "euros");
        break;

    default:
        console.log("El IVA introducido no es valido");
}

descuentoTotalPorcent = descuentoTotal * 100;
ivaDelPrecio = ivaDelPrecio.toFixed(2);

console.log("El iva del producto es: ", ivaDelPrecio, "euros");
console.log("El total de descuento es: ", Math.trunc(descuentoTotalPorcent), "%");