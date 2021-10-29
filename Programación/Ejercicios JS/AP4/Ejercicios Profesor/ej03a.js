/* 
EJERCICIO 3.  Programa que pida por teclado 10 números y los almacene en un array.
Una vez introducidos los números, debe informar posteriormente 
sobre cuantos números son PARES y cuantos IMPARES.
*/

function rellenaArray(limite) {

    let arr= [];
    let readlineSync = require('readline-sync');
    for(let i=0; i<limite; i++) {
        arr[i] = readlineSync.questionInt('Dime el elemento ' + (i+1) + ': ');
    }
    return arr;
}

function calculaPares(vector) {
    let cuantosPares=0;
    for(let i=0;i<vector.length;i++) {
        if (vector[i] %  2 == 0) {
            cuantosPares++;
        }
    }
    return cuantosPares;
}

function calculaImpares(vector) {
    let cuantosImpares=0;
    for(let i=0;i<vector.length;i++) {
        if (vector[i] %  2 == 1) {
            cuantosImpares++;
        }
    }
    return cuantosImpares;
}


let numeros = []; // defino un array vacio.
let numPares, numImpares;
// llamo a la función rellenaArray para rellenar los elementos.
numeros = rellenaArray(10);
// llamo a una función que nos calcula la cantidad de números pares del vector.
numPares = calculaPares(numeros);
// llamo a una función que nos calcula la cantidad de números impares del vector.
numImpares = calculaImpares(numeros);

// visualización de datos
console.log(numeros);
console.log('Elementos pares: ' + numPares);
console.log('Elementos impares: ' + numImpares);