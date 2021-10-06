let readlineSync, total = 0, numero1 = 0, numero2 = 0, a = 1;

readlineSync = require("readline-sync");


for (a = 1; a <= 2; a++) {
    numero2 = readlineSync.questionInt("Dime un numero ");
    if (numero1 == 0) {
    numero1 = numero2;
    }
}

a = 1

for (a = 1; a <= numero2; a++) {
    total = total + numero1;
}
console.log(total);
console.log(numero1);
console.log(numero2);