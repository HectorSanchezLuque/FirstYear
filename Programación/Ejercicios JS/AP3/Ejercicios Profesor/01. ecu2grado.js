// Cálculo de la ecuación de 2º grado

let readlineSync = require("readline-sync");

let a = readlineSync.questionInt("Introduce el valor de A: ");
let b = readlineSync.questionInt("Introduce el valor de B: ");
let c = readlineSync.questionInt("Introduce el valor de C: ");

let x1, x2, discriminante;

discriminante = b*b-4*a*c;

if (discriminante<0) {
    // El discriminante es negativo
    console.log("La ecuación no tiene solución real. Es imaginaria");
} else {
    // El discriminante es positivo, por lo que paso a calcular las dos soluciones
    x1 = (-b + Math.sqrt(discriminante)) / (2*a);
    x2 = (-b - Math.sqrt(discriminante)) / (2*a);
    console.log("Las soluciones son ",x1,"y",x2);
}