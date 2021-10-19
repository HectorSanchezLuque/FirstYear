function esPar(numero) {
    if (numero % 2 == 0) {
        return true
    } else {
        return false
    }
}


let readlineSync, numero;
readlineSync = require("readline-sync");

numero = readlineSync.questionInt("Dime un numero ");

if (esPar(numero)) {
    console.log("El numero ", numero, "es par")
} else {
    console.log("El numero ", numero, "no es par")
}