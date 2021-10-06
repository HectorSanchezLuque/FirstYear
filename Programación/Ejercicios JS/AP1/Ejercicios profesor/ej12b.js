/*
EJERCICIO 12. Programa que calcula el mayor de tres números proporcionados por teclado. 
Previamente a ello debe comprobar que los tres números suministrados son distintos. 
En caso de que no lo sea debe avisar que los números suministrados no son válidos.
En esta solución hacemos uso del método max de la clase Math 
*/


let readlineSync = require('readline-sync');
let num1 = readlineSync.question('Introduce el primer numero: ');
let num2 = readlineSync.question('Introduce el segundo numero: ');
let num3 = readlineSync.question('Introduce el tercer numero: ');

if (num1==num2 || num1==num3 || num2==num3) 
    console.log('Los numeros suministrados no son validos');
else {
    let mayor = Math.max(num1,num2,num3)
    console.log('El numero mayor es',mayor);
}

            