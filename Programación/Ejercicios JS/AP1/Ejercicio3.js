let readlinesync = require ("readline-sync");
let a;

a = readlinesync.questionInt("Dime un número ");
if (a%2 == 0) {
    console.log("El numero es par")
} else {
    console.log("El numero es impar")
}