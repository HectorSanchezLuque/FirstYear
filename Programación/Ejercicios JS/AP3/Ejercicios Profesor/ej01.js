// EJERCICIO 1. Programa que pida un número y calcule si es par o impar. 
// Deberás utilizar una función esPar, que recibirá el número correspondiente 
// y devuelva true si es par y false si no lo es.

function esPar(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
    // También se podría programar de una forma más eficiente realizando únicamente:
    // return (num%2==0);
}

// Programa principal

let readlineSync = require('readline-sync');
let numero = readlineSync.questionInt('Dime un numero: ');

if (esPar(numero) == true) {  // Recordad...no sería necesario comparar con true!!!!. 
    console.log(numero + ' es PAR');
} else {
    console.log(numero + ' es IMPAR');
}
