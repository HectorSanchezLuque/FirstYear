let readlinesync = require("readline-sync");
let a, b, c;

a = readlinesync.questionInt("Dime la medida de uno de los lados del triangulo ");
b = readlinesync.questionInt("Dime la medida de otro de los lados del triangulo ");
c = readlinesync.questionInt("Dime la medida del ultimo lado del triangulo ");

if (a==c && !(c==b)) {
    console.log("El triangulo es isosceles");
}
if (a===c && c===b) {
    console.log("El triangulo es equilatero");
}
    if (!(a===b) && !(b===c) && !(a===c)) {
    console.log("El triangulo es escaleno");
}