let readlinesync = require("readline-sync");
let h, m, s;

h = readlinesync.questionInt("Dime que hora es ");
if (h<12) {
    tiempoH = "am";
} else {
    tiempoH = "pm";
}
if (h < 0 || h > 23) {
    
    console.log("La hora no es valida");
}
m = readlinesync.questionInt("Dime los minutos ");
if (m < 0 || m > 59) {
    console.log("Los minutos no son validos");
}
s = readlinesync.questionInt("Dime los segundos ");
if (s < 0 || s > 59) {
    console.log("Los segundos no son validos");
} 

if (s < 0 && s > 59) {
    console.log("Los segundos no son validos");
} else if (h >= 0 && h <= 23 && m >= 0 && m <= 59 && s >= 0 && s <= 59) {
    if (h >= 13)
    h = h - 12
    console.log("Son las ", h, tiempoH, "horas con ", m, "minutos y ", s, "segundos");
}