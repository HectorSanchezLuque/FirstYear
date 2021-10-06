/*
EJERCICIO 1. Programa que calcule la distancia recorrida (m) por un móvil 
que tiene velocidad constante (m/sg) durante un tiempo T (sg). 
Considera que es un MRU (Movimiento rectilíneo uniforme).
Formula --> Velocidad = distancia / tiempo;
*/



// Entrada de datos. Petición de la velocidad inicial y el tiempo del desplazamiento.  
let readlineSync = require('readline-sync');
let velocidad = readlineSync.question('Dime la velocidad (m/s): ');
let tiempo = readlineSync.question('Dime el tiempo (sg): ');

// Cálculo de la distancia recorrida (espacio)
let distancia = velocidad * tiempo;

// Visualización del resultado. En metros y en kilómetros.
console.log('Es espacio recorrido en metros es: ' + distancia);
console.log('Es espacio recorrido en kilometros es: ' + distancia/1000);


