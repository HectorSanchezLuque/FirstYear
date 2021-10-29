/* 
EJERCICIO 1. Desarrollar un programa en el que se pida al usuario 
un vector de 5 números enteros e indique en pantalla la media aritmética
de todos sus elementos. 
*/

let readlineSync = require('readline-sync');

// defino un array vacio
let elemento = [];
let suma = 0, promedio;

// Pido todos los elementos del array y mientras los introduzco voy calculando
// la suma acumulada de todos los elementos.
for(let i=0; i<5; i++) {  // recorro desde  0 hasta 4 (en total 5 posiciones)
    elemento[i] = readlineSync.questionInt('Dime el elemento ' + (i+1) + ': '); 
    suma = suma + elemento[i];
}
promedio = suma / elemento.length; // es lo mismo que dividir entre 5 
// visualizo el resultado
console.log('El promedio de todos los elementos es: ' + promedio);
