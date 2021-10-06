/*
EJERCICIO 1. Programa que permita mostrar el sueldo promedio de 5 empleados. 
El programa deberá leer el sueldo de cada empleado en euros y calcular su promedio.
Realiza una modificación posterior de tal forma que también informe del sueldo máximo introducido.
*/

let promedio = 0, sueldo, cantidadTotal = 0;
let sueldoMaximo = 0;

let readlineSync = require('readline-sync');

for (let i=1; i<=5; i++) {
    // Se pide el sueldo de un empleado
    sueldo = readlineSync.question('Indica el sueldo del empleado ' + i + ': ');
    // Acumulo el sueldo en la variable que los va sumando
    if (sueldo > sueldoMaximo) {
        // asigno el sueldo actual como el nuevo sueldo máximo
        sueldoMaximo = sueldo;
    }
    cantidadTotal += Number(sueldo); 
}

// Calculo el promedio del sueldo y lo visualizo
promedio = cantidadTotal / 5  // no puedo indicar i en el denominador porque es 6 en este momento.
console.log('El sueldo promedio es',promedio, 'Euros');

// Visualizo el nuevo sueldo máximo
console.log('El sueldo maximo es',sueldoMaximo, 'Euros');