function esMultiplo(numero) {
    if (numero % 10 == 0) {
        return true;
    } else {
        return false;
    }
}








let readlineSync, numero;
readlineSync = require("readline-sync");

numero = readlineSync.questionInt("Dime un numero ");

if (esMultiplo(numero)) {
    console.log(numero, "es multiplo de 10");
} else {
    console.log(numero, "no es multiplo de 10");
}

