function dameNumero(numeritos) {
    let a, b;
    for (a = 0; a < 6; a++) {
        b = Math.random() * 49 + 1;
        return b;
    }
}



let readlinesync, numeritos, letra;
readlinesync = require ("readline-sync");
numeritos = 1;

console.log(dameNumero());