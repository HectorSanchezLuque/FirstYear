/*
EJERCICIO 9. Programa que muestre la suma de los números pares comprendidos 
entre dos valores numéricos positivos introducidos por teclado. 
Debes utilizar una función calculaSuma que reciba los dos valores que acotan
el rango y devuelva el resultado de la suma esperado. 
*/

function sumaPares(limBajo,limAlto) {
    let suma=0; // variable para acumular el valor de los numeros pares
    for(let i=limBajo; i<=limAlto; i++) { // desde limBajo a limAlto recorro con i
        if (i % 2 == 0)   // si i es par acumulo su valor en la suma
            suma = suma + i;  // también: suma += i
    }
    return suma;
}

// Programa principal

let readlineSync = require('readline-sync');
let n1 = readlineSync.questionFloat('Primer numero: ');
let n2 = readlineSync.questionFloat('Segundo numero: ');

// Esta solución controla si existe algún número de los que se ha introducido que no es entero.
// Además de comprobar cual es el número menor para pasarlo primero como parámetro.
if ((n1 != Math.trunc(n1)) || (n2 != Math.trunc(n2))) {  
    console.log('Algún número introducido no es entero');
} else if (n1<n2) {
        console.log('La suma de los pares entre ' + n1 + ' y '+ n2 + ' es ' + sumaPares(n1,n2));
       } else { 
        console.log('La suma de los pares entre ' + n2 + ' y '+ n1 + ' es ' + sumaPares(n2,n1));
       } 
