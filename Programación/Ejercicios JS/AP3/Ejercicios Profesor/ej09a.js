/*
EJERCICIO 9. Programa que muestre la suma de los números pares comprendidos 
entre dos valores numéricos positivos introducidos por teclado. 
Debes utilizar una función calculaSuma que reciba los dos valores que acotan
el rango y devuelva el resultado de la suma esperado. 
*/

function sumaPares(limBajo, limAlto) {
    let suma = 0; // variable para acumular el valor de los numeros pares
    for (let i = limBajo; i <= limAlto; i++) { // desde limBajo a limAlto recorro con i
        if (i % 2 == 0)   // si i es par acumulo su valor en la suma
            suma = suma + i;  // también: suma += i

    }
    return suma;
}

// Programa principal

let readlineSync = require('readline-sync');
let n1 = readlineSync.questionInt('Primer numero: ');
let n2 = readlineSync.questionInt('Segundo numero: ');

// compruebo cual es el numero menor para pasarlo el primero en los parámetros
if (n1 < n2) {
    console.log('La suma de los pares entre ' + n1 + ' y ' + n2 + ' es ' + sumaPares(n1, n2));
} else {
    console.log('La suma de los pares entre ' + n2 + ' y ' + n1 + ' es ' + sumaPares(n2, n1));
} 
