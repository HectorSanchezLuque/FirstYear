/*
EJERCICIO 12. Programa que calcula el mayor de tres números proporcionados por teclado. 
Previamente a ello debe comprobar que los tres números suministrados son distintos. 
En caso de que no lo sea debe avisar que los números suministrados no son válidos.. 
*/


let readlineSync = require('readline-sync');
let num1 = readlineSync.question('Introduce el primer numero: ');
let num2 = readlineSync.question('Introduce el segundo numero: ');
let num3 = readlineSync.question('Introduce el tercer numero: ');

if (num1==num2 || num1==num3 || num2==num3) 
    console.log('Los numeros suministrados no son validos');
else if (num1 >= num2 && num1 >= num3)
        // el mayor es num1
        console.log('El numero mayor es',num1);
    else if (num2 >= num3)
            // el mayor es num2
            console.log('El numero mayor es',num2);
        else   
            // el mayor es num3
            console.log('El numero mayor es',num3);


            