/*
EJERCICIO 11. Programa que calcula el mayor de tres números proporcionados por teclado. 
*/


let readlineSync = require('readline-sync');
let num1 = readlineSync.question('Introduce el primer numero: ');
let num2 = readlineSync.question('Introduce el segundo numero: ');
let num3 = readlineSync.question('Introduce el tercer numero: ');

if (num1 >= num2 && num1 >= num3)
    // el mayor es num1
    console.log('El numero mayor es',num1);
else { 
    if (num2 >= num3)
        // el mayor es num2
        console.log('El numero mayor es',num2);
    else   
        // el mayor es num3
        console.log('El numero mayor es',num3);
}