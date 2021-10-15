function sumar(a,b) {
    return a + b;
}

let readlineSync = require("readline-sync");
let a = readlineSync.questionInt("Dime un numero ");
let b = readlineSync.questionInt("Dime otro numero ");
let total = sumar(a,b);
console.log(total)