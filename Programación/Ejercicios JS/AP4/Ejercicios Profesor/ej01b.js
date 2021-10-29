/* 
EJERCICIO 1. Desarrollar un programa en el que se pida al usuario 
un vector de 5 números enteros e indique en pantalla la media aritmética
de todos sus elementos. 

Variación del ejercicio ej01a. 
En este caso de la petición de los numeros y el cálculo del promedio 
se encarga una funcion calculaPromedio. 
*/

function calculaPromedio(num) {
    let suma=0;
    for(let i=0; i<5; i++) {  // recorro desde  0 hasta 4 (en total 5 posiciones)
        num[i] = readlineSync.questionInt('Dime el numero ' + (i+1) + ': '); 
        suma = suma + num[i];
    }
    return suma/num.length;
}

let readlineSync = require('readline-sync');

let numeros=[];
let promedio = calculaPromedio(numeros);
console.log("Numeros introducidos:", numeros.toString());
console.log('El promedio de todos los numeros es: ' + promedio);
