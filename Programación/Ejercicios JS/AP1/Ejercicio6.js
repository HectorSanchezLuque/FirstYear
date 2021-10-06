let readlinesync = require ("readline-sync");
let edad1, edad2, difEdad;

edad1 = readlinesync.questionInt("Dime la edad de uno del primer hermano ");
edad2 = readlinesync.questionInt("Dime la edad del segundo hermano ");
if (edad1>edad2) {
    console.log("El primer hermano es mayor que el segundo y la diferencia de edad es de: ", edad1-edad2, "años");
} else if (edad2>edad1) {
    console.log("El segundo hermano es mayor que el primero y la diferencia de edad es de: ", edad2-edad1, "años");
}

