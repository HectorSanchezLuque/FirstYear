function tMultiplicar(a, b) {

    let readlineSync = require("readline-sync");
    b = readlineSync.questionInt("Dime un numero ")

    for (a = 0; a <= 10; a++) {
        console.log(b * a);
    }
}

tMultiplicar();
