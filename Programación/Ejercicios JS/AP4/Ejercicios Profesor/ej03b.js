/* 
EJERCICIO 3b.  Programa que pida por teclado 10 números y los almacene en un array.
Una vez introducidos los números, debe informar posteriormente 
sobre cuantos números son PARES y cuantos IMPARES. También debe visualizar los
pares e impares encontrados.

Variación del ejercicio ej03a. En este ejemplo informa de cuantos y además de cuales son
los pares e impares encontrados en el array originalmente introducido por teclado.
*/

function rellenaArray(limite) {

    let arr= [];
    let readlineSync = require('readline-sync');
    for(let i=0; i<limite; i++) {
        arr[i] = readlineSync.questionInt('Dime el elemento ' + (i+1) + ': ');
    }
    return arr;
}

function calculaNumerosPares(vector) {
    let pares=[];
    let j=0;
    for(let i=0;i<vector.length;i++) {
        if (vector[i] %  2 == 0) {
            pares[j]=vector[i];
            j++;
        }
    }
    return pares;
}

function calculaNumerosImpares(vector) {
    let impares=[];
    let j=0;
    for(let i=0;i<vector.length;i++) {
        if (vector[i] %  2 == 1) {
            impares[j]=vector[i];
            j++;
        }
    }
    return impares;
}

let numeros = []; // defino un array vacio.
let pares=[], impares=[];
// llamo a la función rellenaArray para rellenar los elementos.
numeros = rellenaArray(10);
// llamo a una función que nos calcula la cantidad de números pares del vector.
pares = calculaNumerosPares(numeros);
// llamo a una función que nos calcula la cantidad de números impares del vector.
impares = calculaNumerosImpares(numeros);

// visualización de datos
console.log('Numeros del Array: ',numeros.toString());
console.log('Numeros pares: ' + pares.toString(), '--- Cantidad: ',pares.length);
console.log('Numeros impares: ' + impares.toString(), '--- Cantidad: ',impares.length);