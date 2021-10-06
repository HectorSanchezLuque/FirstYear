let readlinesync = require("readline-sync");
let ganados, perdidos, empatados, puntos;

ganados = readlinesync.questionInt("Dime cuantos partidos han ganado ");
perdidos = readlinesync.questionInt("Dime cuantos partidos han perdido ");
empatados = readlinesync.questionInt("Dime cuantos partidos han empatado ");

puntos = (ganados*3) + empatados;

console.log("El equipo lleva acumulados ", puntos, "puntos");