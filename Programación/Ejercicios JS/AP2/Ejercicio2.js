let readlineSync, edad, mayorEdad=0;

readlineSync = require("readline-sync");

for (let a=1; a<=4; a++) {
    edad = readlineSync.question("Dime la edad ");
    if (edad>= 18) {
        mayorEdad++
    }

}

console.log(mayorEdad)