/*
EJERCICIO 5. Programa que pida el número de partidos ganados, perdidos y empatados
por un equipo en un torneo de futbol. Debe calcular y mostrar el total de los puntos 
obtenidos, teniendo en cuenta que por cada partido ganador obtendrá 3 puntos,
empatado sería 1 punto y perdido 0 puntos.
Debes utilizar una función calculaPuntos que recibe como parámetros el número 
de partidos ganados, perdidos y empatados y retorna la cantidad de puntos totales obtenidos.
*/

function calculaPuntos(g,p,e) {

    const valorG = 3, valorP = 0, valorE = 1;
    let puntosTotales=0;
    
    puntosTotales = g * valorG + e * valorE + p * valorP;
    return puntosTotales;

    // Sería válido también lo siguiente en vez de las lines 13 a 16.
    // return (g * valorG + e * valorE + p * valorP); 

}

// Programa principal

let total; // variable para almacenar el total de puntos

let readlineSync = require('readline-sync');
let partGanados = readlineSync.questionInt('Partidos ganados: ');
let partPerdidos = readlineSync.questionInt('Partidos perdidos: ');
let partEmpatados = readlineSync.questionInt('Partidos empatados: ');

total = calculaPuntos(partGanados, partPerdidos, partEmpatados);
console.log('Los puntos totales del equipo son: ' + total);

// Sería válido también lo siguiente en vez de las lineas 32 y 33:
// console.log('Los puntos totales del equipo son: ' + 
//     calculaPuntos(partGanados, partPerdidos, partEmpatados));