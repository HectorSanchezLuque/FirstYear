/*
EJERCICIO 4. Programa que muestre los números múltiplos de 3 que existen entre el 1 y el 100.
*/

console.log('Numeros múltiplos de 3 entre 1 y 100');
let numero, i = 0;

do {
    i++;
    numero = i * 3;
    if (numero < 100) {
        console.log(numero, "es multiplo de 3");
    }
} while (numero < 100);


