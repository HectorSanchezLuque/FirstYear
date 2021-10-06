/*
EJERCICIO 13. 
Programa que lea temperaturas obtenidas en observatorios meteorológicos.
Al finalizar las lecturas, debe informar de cuál ha sido la temperatura máxima y mínima correspondiente.
El programa finalizará cuando introduzcamos como temperatura el siguiente valor ’99’.
*/

let temp;   // variable para almacenar las temperaturas.
let tempMaxima = 0, tempMinima = 0  // variables para almacenar las temperaturas máximas y mínimas
let readlineSync = require('readline-sync');

// pido una primera temperatura fuera del bucle que al ser la primera será la máxima y la mínima
temp = readlineSync.questionInt('Introduce una temperatura: ');
tempMinima = temp;
tempMaxima = temp;

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


