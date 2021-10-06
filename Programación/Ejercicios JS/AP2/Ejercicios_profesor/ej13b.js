/*
EJERCICIO 13. 
Programa que lea temperaturas obtenidas en observatorios meteorológicos.
Al finalizar las lecturas, debe informar de cuál ha sido la temperatura máxima y mínima correspondiente.
El programa finalizará cuando introduzcamos como temperatura el siguiente valor ’99’.
Variante del ejercicio ej13a con otra LÓGICA DE PROGRAMACIÓN.
*/

let temp;   // variable para almacenar las temperaturas pedidas pr teclado.
// variable para almacenar la temperatura máxima
let tempMaxima = -1000; // Inicialmente con  valor muy bajo para que la primera leida por teclado sea ya la máxima.  
// variable para almacenar la temperatura mínima
let tempMinima = 1000  // Inicialmente con  valor muy alto para que la primera leida por teclado sea ya la mínima.
// Inicializo los valores para que la 1ª temperatura introducida sea a la vez máxima y mínima.

let readlineSync = require('readline-sync');

do {
    temp = readlineSync.questionInt('Introduce una temperatura: ');
    if (temp > tempMaxima && temp != 99) { // Será la nueva máxima
        tempMaxima = temp;
    }
    if (temp < tempMinima && temp != 99) { // Será la nueva mínima
        tempMinima = temp;
    }
} while (temp != 99);

// informamos de la temperatura máxima y mínima
console.log('La maxima es ' + tempMaxima + ' y la minima es ' + tempMinima);


