/*
EJERCICIO 4. Programa que pida un número y muestre si el número es múltiplo de 10. 
*/

// petición de datos
let readlineSync = require('readline-sync');
let numero = readlineSync.question('Introduce un numero: ');

// Compruebo si es múltiplo de 10
if (numero % 10 == 0)
    console.log(numero + ' SI es multiplo de 10')
else
    console.log(numero + ' NO es multiplo de 10');
