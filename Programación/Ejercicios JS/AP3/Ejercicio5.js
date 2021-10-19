function calculaPuntos(ganados, empatados, perdidos) {
    const puntosGanados = 3, puntosPerdidos = 0, puntosEmpatados = 1;
    puntos = (ganados * puntosGanados) + (empatados * puntosEmpatados) + (perdidos * puntosPerdidos);
    return puntos;
}



let readlinesync = require("readline-sync");
let ganados, perdidos, empatados, puntos;

ganados = readlinesync.questionInt("Dime cuantos partidos han ganado ");
perdidos = readlinesync.questionInt("Dime cuantos partidos han perdido ");
empatados = readlinesync.questionInt("Dime cuantos partidos han empatado ");

console.log("Han obtenido un total de ", calculaPuntos(ganados,empatados, perdidos));