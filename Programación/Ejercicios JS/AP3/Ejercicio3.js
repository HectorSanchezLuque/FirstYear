function diferenciaEdad(edad1,edad2) {
    let difEdad;
    if (edad1 > edad2) {
        difEdad = edad1 - edad2;
    } else {
        difEdad = edad2 - edad1;
    }
    return difEdad;
}

let readlineSync, edad1, edad2;
readlineSync = require("readline-sync");

edad1 = readlineSync.questionInt("Dime una edad ");
edad2 = readlineSync.questionInt("Dime otra edad ");

let diferencia = diferenciaEdad(edad1,edad2)

console.log("La diferencia de edad entre los hermanos es " + diferenciaEdad(edad1,edad2), "años");