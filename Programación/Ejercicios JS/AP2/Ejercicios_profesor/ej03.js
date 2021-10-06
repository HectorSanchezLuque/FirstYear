/*
EJERCICIO 3. Elabora un programa que solicite dos números y
muestre su producto por el método de las sumas sucesivas:
Por ejemplo: 5 x 4 = 20  es 5 + 5 + 5 + 5 = 20 (sumamos 4 veces el número 5)
*/


let readlineSync = require('readline-sync');

// Defino en inicializo las variables que me harán falta en el programa
let resultado=0;

let multiplicando = readlineSync.questionInt('Dime el numero a multiplicar: ');
let multiplicador = readlineSync.questionInt('Dime el multiplicador: ');

for (let i=1; i<=multiplicador; i++) {
    resultado = resultado + multiplicando;   // mejor usar: resultado += multiplicando
}
// Visualizo los resultados de dos formas
console.log('El valor de multiplicar ',multiplicando,'y',multiplicador,'es',resultado);
console.log(multiplicando,'x', multiplicador ,'=', resultado);

