/*
EJERCICIO 18. Programa que permita ingresar el número de partidos ganados, perdidos y empatados
por un equipo en un torneo de futbol. Debe calcular y mostrar el total de los puntos obtenidos,
teniendo en cuenta que por cada partido ganador obtendrá 3 puntos, empatado sería 1 punto y perdido 0 puntos
*/

// Petición de datos de entrada
let readlnSync = require('readline-sync');
let partGanados = readlnSync.question('Numero de partidos ganados: ');
let partPerdidos = readlnSync.question('Numero de partidos perdidos: ');
let partEmpatados = readlnSync.question('Numero de partidos emmpatados: ');

let totalPuntos;
const puntosG = 3, puntosE = 1, puntosP = 0;

// compruebo que los números de partidos no sean negativos
if (partGanados<0 || partPerdidos<0 || partEmpatados<0) 
    console.log('Los datos introducidos no son correctos');
else {
    // evidentemente los partidos perdidos en la fórmula podríamos obviarlos. Se
    // incluye por si en algún momento hubiese algún cambio en su puntaje.
    totalPuntos = partGanados * puntosG + partEmpatados * puntosE + partPerdidos * puntosP;

    // Visualización de dados de salida.
    console.log('Los puntos obtenidos son',totalPuntos);
}

