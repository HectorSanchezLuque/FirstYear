let readlinesync = require ("readline-sync");
let a, b;
a = readlinesync.questionInt("Cual es la capacidad del disco? ");
if (a <= 0) {
    console.log("capacidad no valida")
}else {
    a = a * 1024;
    b = a / 700;
    console.log("Haran falta: ",Math.trunc(b), "discos")
}


