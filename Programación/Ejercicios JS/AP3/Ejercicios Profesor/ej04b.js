// EJERCICIO 4. Programa que tras leer un número entre 1 y 10, 
// muestre su equivalente en número romano. 
// Debes utilizar una función numRomano que reciba el número
// en formato decimal y lo devuelva en formato romano.

function numRomano(num) {
    switch (num) {
        case 1: return 'I'; // no pongo break porque return finaliza obligatoriamente
        case 2: return 'II'; // idem...
        case 3: return 'III';
        case 4: return 'IV';
        case 5: return 'V';
        case 6: return 'VI';
        case 7: return 'VII';
        case 8: return 'VIII';
        case 9: return 'IX';
        case 10: return 'X';
    }
}

// Programa principal

let valor, numero; // variable que almacenará el número en formato romano.
let readlineSync = require('readline-sync');

// En esta solución validamos que el número esté entre 1 y 10. 
// Si no es correcto lo volvemos a pedir hasta que esté en el intervalo correcto
do {
    numero = readlineSync.questionInt('Dime un numero entre 1 y 10 (incluidos): ');
    if (numero < 1 || numero > 10)
        console.log('El número no es válido. Debe estar entre 1 y 10 incluidos');
} while (numero < 1 || numero > 10);

valor = numRomano(numero);
console.log(numero + ' en romano es ' + valor);

