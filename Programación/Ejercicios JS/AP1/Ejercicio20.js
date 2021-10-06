let readLineSync = require("readline-sync");
let iva, descuento1, descuento2, descuento3, descuentoTotal, dValidos;
dValidos = true
producto = readLineSync.questionInt("Cual es el precio? ");

descuentoTotal = 0;
descuento1 = readLineSync.keyInYN("Es usted de catarroja? ");
descuento2 = readLineSync.keyInYN("Cursa usted DAM? ");
if (descuento2===true) {
    descuento3 = readLineSync.keyInYN("Está usted en el primer curso? ");
}

iva = readLineSync.questionInt("Deseas aplicar el 16% o el 21%? ");
if (!(iva === 16 || iva === 21)) dValidos = false
if (!dValidos) {
    console.log("El IVA introducido no es válido");
} else {
              if (iva===21) {
            iva = 0.21;
            } else if (iva===16) {
                iva = 0.16;
                if (descuento1===true) {
                    descuentoTotal = descuentoTotal + 0.05;
                }
                if (descuento2===true) {
                    descuentoTotal = descuentoTotal + 0.05;
                }
                if (descuento3===true) {
                    descuentoTotal = descuentoTotal + 0.05;
                }
        }
        }




console.log("el precio final es: ", ( producto - (producto*descuentoTotal)) + (producto*iva), "euros");
console.log("El valor del IVA es: ", producto*iva, "euros");
console.log("El porcentaje total de descuento es: ", descuentoTotal);