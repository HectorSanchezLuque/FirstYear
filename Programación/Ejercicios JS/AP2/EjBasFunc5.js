function tMultiplicar(tabla) {
    for (let a = 0; a <= limite; a++) {
        console.log(tabla, "x", a, "=", tabla * a);
    }
}


let readlineSync = require("readline-sync");
let numero = readlineSync.questionInt("Dime el numero ");
let limite = readlineSync.questionInt("Cual es el limite? ")

tMultiplicar(numero);

