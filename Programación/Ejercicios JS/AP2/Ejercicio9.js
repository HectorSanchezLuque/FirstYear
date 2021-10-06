let readlineSync = require('readline-sync');
let dato;
let numeros = 0;

do {
dato = readlineSync.question("introduce un caracter ");
if (dato>= "0" && dato <= "9") {
    numeros++;
}
} while (dato != ".");

console.log(numeros);