let readlinesync = require ("readline-sync");
let a;

a = readlinesync.questionInt("Dime un número ");
if (a%10 == 0) {
    console.log("El numero es multiplo de 10");
} else {
    console.log("No es multiplo de 10")
}