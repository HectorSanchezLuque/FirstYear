// Cálculo de la ecuación de 2º grado
// Usamos una función para calcular cada solución

function calculaSolucion1(a,b,c) {
    return (-b + Math.sqrt(b*b-4*a*c)) / (2*a);
}

function calculaSolucion2(a,b,c) {
    return (-b - Math.sqrt(b*b-4*a*c)) / (2*a);
}

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
    x1 = calculaSolucion1(a,b,c);
    x2 = calculaSolucion2(a,b,c);
    console.log("Las soluciones son ",x1,"y",x2);
    // También válido hacer directamente:
    // console.log("Las soluciones son ",calculaSolucion1(a,b,c),"y",calculaSolucion2(a,b,c));
}