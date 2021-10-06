/*
EJERCICIO 11. Programa que calcula el mayor de tres números proporcionados por teclado. 
En esta propuesta se utiliza el método max de la clase Math.
*/


let readlineSync = require('readline-sync');
let num1 = readlineSync.question('Introduce el primer numero: ');
let num2 = readlineSync.question('Introduce el segundo numero: ');
let num3 = readlineSync.question('Introduce el tercer numero: ');

let mayor = Math.max(num1,num2,num3);

console.log("El mayor es",mayor);