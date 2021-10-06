/*
EJERCICIO 3. Programa que pida un número y calcule si es par o impar.
Con comprobación previa de si es entero o no. 
*/

// petición de datos
let readlineSync = require('readline-sync');
let numero = readlineSync.question('Dame un numero: ');

// Compruebo primero si el numero es entero (divido entre 1 y si no tiene resto es entero)
// otra forma puede ser la siguiente  if (numero - Math.floor(numero) == 0)
if (numero % 1 == 0) {
    // Siendo entero compruebo si es par
    if (numero % 2 == 0) 
        console.log(numero + ' Es PAR')
    else
        console.log(numero + ' Es IMPAR');
} else
    // Si el número no es entero, aviso.
    console.log('El numero no es entero');

