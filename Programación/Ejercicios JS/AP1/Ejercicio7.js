let readlinesync = require ("readline-sync");
let b, a;

a = readlinesync.question("Dime una frase ");
b = readlinesync.question("Dime otra frase ");

if (a=== b) {
    console.log("Las dos frases son iguales");

} else {
    console.log("Las dos frases no son iguales");
}