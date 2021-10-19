function primo(numero) {
    let verdadero = true
    for (let a = 2; a < numero; a++) {
        if (numero % a == 0) {
            verdadero = false;
            a = numero;
        }
    }
    return verdadero
}

let readlineSync, numero1, numero2;
readlineSync = require("readline-sync");


for (let a = 1; a < 1000; a++) {
    if (primo(a)) {
        console.log(a);
    }
}


