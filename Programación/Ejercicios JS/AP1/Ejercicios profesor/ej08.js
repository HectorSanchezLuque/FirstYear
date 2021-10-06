/*
EJERCICIO 8. Programa que lea dos caracteres y compruebe si son dos letras minúsculas 
*/

let sonMinuscula = false;
let readlineSync = require('readline-sync');
let car1 = readlineSync.question('Primer caracter: ');
let car2 = readlineSync.question('Segundo caracter: ');

if ((car1.length != 1) || (car2.length != 1)) 
    // los datos introducidos no son correctos. Deben tener 1 solo caracter.
    console.log('Un caracter tiene una longitud de 1. Algo no ha ido bien en la entrada de datos...')
else {
    sonMinuscula = (car1>='a' && car1<='z') && (car2>='a' && car2<='z');
    if (sonMinuscula)
        console.log('Ambos caracteres suministrados son minuscula.')
    else 
        console.log('Alguno (o ambos) caracteres suministrados NO son minuscula.');
}    
