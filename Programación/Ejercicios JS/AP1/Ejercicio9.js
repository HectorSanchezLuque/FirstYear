let readlinesync = require ("readline-sync");
let b, a;

a = readlinesync.questionInt("Dime el numero que quieres dividir ");
b = readlinesync.questionInt("Dime el divisor ");

if (b==0) {
    console.log("La división no puede realizarse");
} else if (b>0) {
    console.log("El resultado es: ", a/b);
}