let readlinesync = require ("readline-sync");
let a;

a = readlinesync.question("Dime una letra ");

if (a>="A" && a<="Z") {
    console.log("Es una letra mayuscula");

} else {
    console.log("No es una letra mayuscula");
}