function comprobarTriangulo(a,b,c) {
    let tipoTriangulo = "";
    if (a == c && !(c==b)) {
        tipoTriangulo = "Isosceles";
    } if (a == b && !(b==c)) {
        tipoTriangulo = "Isosceles";
    } if (b == c && !(c==a)) {
        tipoTriangulo = "Isosceles";
    } else if (a == c && c == b ) {
        tipoTriangulo = "Equilatero";

    } else if (!(a===b) && !(b===c) && !(a===c))  {
        tipoTriangulo = "Escaleno";
    }
    return tipoTriangulo;
}

let readlinesync = require("readline-sync");
let a, b, c;

a = readlinesync.questionInt("Dime la medida de uno de los lados del triangulo ");
b = readlinesync.questionInt("Dime la medida de otro de los lados del triangulo ");
c = readlinesync.questionInt("Dime la medida del ultimo lado del triangulo ");

let resultado;
resultado = comprobarTriangulo(a,b,c)
console.log("El triangulo es " + resultado)
