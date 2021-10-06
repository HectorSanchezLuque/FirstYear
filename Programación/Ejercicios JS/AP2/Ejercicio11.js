let readlineSync = require('readline-sync');
let a = 0; let b = 0;
let suma = 0;

a = readlineSync.questionInt("Dime el menor numero ");
b = readlineSync.questionInt("Dime el mayor numero ");

for (let i = a; i <= b; i++) {
    if (i % 2 == 1) {
    suma = suma + 1;
    console.log(i);
    }
}
console.log("El total es: ",suma);