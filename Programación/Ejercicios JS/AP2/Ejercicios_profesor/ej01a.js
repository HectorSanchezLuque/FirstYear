/*
EJERCICIO 1. Programa que permita mostrar el sueldo promedio de 5 empleados. 
El programa deberá leer el sueldo de cada empleado en euros y calcular su promedio.
Sin modificación propuesta en la última línea del enunciado
*/

let promedio = 0, sueldo, cantidadTotal = 0;

let readlineSync = require('readline-sync');

for (let i=1; i<=5; i++) {
    // Se pide el sueldo de un empleado
    sueldo = readlineSync.question('Indica el sueldo del empleado ' + i + ': ');
    // Acumulo el sueldo en la variable que los va sumando
    cantidadTotal += Number(sueldo); 
}

// Calculo el promedio del sueldo y lo visualizo
promedio = cantidadTotal / 5  // no puedo indicar i en el denominador porque es 6 en este momento.
console.log('El sueldo promedio es',promedio, 'Euros');
