let readlineSync, sueldo, promedio, cantidadTotal, sueldoMaximo;
promedio = 0; cantidadTotal = 0; sueldoMaximo = 0

readlineSync = require("readline-sync");

for (let i=1; i<=5; i++) {
    sueldo = readlineSync.questionInt("Indica el sueldo del empleado ");
    if (sueldo > sueldoMaximo) {
        sueldoMaximo = sueldo;
    }
    cantidadTotal += sueldo
}

promedio = cantidadTotal/5

console.log(promedio)
console.log(sueldoMaximo)
