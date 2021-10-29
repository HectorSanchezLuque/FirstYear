/* 
EJERCICIO 2. Crea un array de 10 posiciones de números (con valores pedidos por teclado).
Visualiza el índice y el valor al que corresponde. Haz dos funciones, 
una para rellenar los valores del array y otra para mostrar sus elementos. 
*/

function rellenaVector1(limite) {

    let arr= [];
    let readlineSync = require('readline-sync');
    for(let i=0; i<limite; i++) {
        arr[i] = readlineSync.questionInt('Dime el elemento ' + (i+1) + ': ');
    }
    // console.log(arr);
    return arr;
}

function rellenaVector2(num, limite) {

    let readlineSync = require('readline-sync');
    for(let i=0; i<limite; i++) {
        num[i] = readlineSync.questionInt('Dime el elemento ' + (i+1) + ': ');
    }
    console.log(num);
}

function visualizaVector(num) {
    console.log(num);
    for(let i=0; i<num.length; i++) {
        console.log('Posicion: ' + i + ' Valor: ' + num[i]);
    }
}



let numeros = []; // defino un array vacio.
// llamo a la función rellenaVector1 para rellenar los elementos del array. Opción 1.
numeros = rellenaVector1(10);

// Opción2. Usar el paso de parámetros por referencia.
// llamo a la función rellenaVector2 para rellenar los elementos del array.
// rellenaVector2(numeros, 10);

// llamo a la función visualizaVector para visualizar los elementos del array.
visualizaVector(numeros);

