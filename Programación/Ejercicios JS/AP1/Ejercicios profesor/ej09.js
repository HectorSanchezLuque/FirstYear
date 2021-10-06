/*
EJERCICIO 9. Programa que lea dos números por teclado y 
muestre el resultado de la división del primero por el segundo. 
Se debe comprobar que el divisor no puede ser cero. 
*/

let readlineSync = require('readline-sync');
let dividendo = readlineSync.question('Introduce el dividendo: ');
let divisor = readlineSync.question('Introduce el divisor: ');

if (divisor==0) 
    // división por cero - no los datos introducidos no son correctos. Deben tener 1 solo caracter.
    console.log('El divisor es cero. No puedo realizar la division')
else {
    // el divisor es válido y se puede realizar la división
    // utilizo el métodlo tofixed para reducir el número de decimales mostrados (a dos)
    console.log('El resultado de la division es: ' , (dividendo/divisor).toFixed(2));
} 
     
