function aRectangulo(a, b) {
    console.log(a * b);
}

let readlineSync = require("readline-sync");

let a = readlineSync.questionInt("Dime un numero ");
let b = readlineSync.questionInt("Dime otro numero ");

aRectangulo(a,b);
