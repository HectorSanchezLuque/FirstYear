/*
EJERCICIO 4. Programa que muestre los números múltiplos de 3 que existen entre el 1 y el 100.
*/

console.log('Numeros múltiplos de 3 entre 1 y 100');
for (let num=1; num<=100; num++) {
    if (num % 3 == 0) {
        // el número es múltiplo de tres y lo visualizo
        console.log(num);
    }
}

