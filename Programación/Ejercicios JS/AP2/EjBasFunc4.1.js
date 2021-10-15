function tMultiplicar(tabla) {
    for (let a = 0; a <= 10; a++) {
        console.log(tabla, "x", a, "=", tabla * a);
    }
}


let readlineSync = require("readline-sync");
let numero = readlineSync.questionInt("Dime el numero ");

tMultiplicar(numero);

