/*
EJERCICIO 5. Programa que pida un carácter por teclado y compruebe si es una letra mayúscula
*/

// petición de datos
let readlineSync = require('readline-sync');
let caracter = readlineSync.question('Introduce un caracter: ');

// Será mayusculas si está entre la A y la Z en el código ASCII.
if (caracter>='A' && caracter<='Z')
    console.log('El caracter ' + caracter + ' SI es letra mayúscula')
else
    console.log('El caracter ' + caracter + ' NO es letra mayúscula')
