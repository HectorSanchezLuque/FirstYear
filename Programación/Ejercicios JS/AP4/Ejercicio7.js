let readlineSync = require ("readline-sync");
let arrayCoches = [];
let arrayMotos = [];
let transportes = [];
let i = 0;
let salir

do {
    arrayCoches[i] = readlineSync.question("Dime una marca de coche ");
    i++
    salir = readlineSync.keyInYN("Quieres introducir otra marca? ");
} while (salir !== false);

do {
    arrayMotos[i] = readlineSync.question("Dime una marca de moto ");
    i++
    salir = readlineSync.keyInYN("Quieres introducir otra marca? ");
} while (salir !== false);



for (let a = 0; a < arrayMotos.length; a++) {
    transportes = arrayCoches.push(arrayMotos[a]);
}

console.log(transportes);