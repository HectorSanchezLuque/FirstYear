function horaValida (h,m,s) {
    if (h >= 0 && h <= 23 && m >= 0 && m <= 59 && s >= 0 && s <= 59) {
    return true
} else {
    return false
}
}

let readlinesync = require("readline-sync");
let h, m, s;


h = readlinesync.questionInt("Dime que hora es ");

m = readlinesync.questionInt("Dime los minutos ");

s = readlinesync.questionInt("Dime los segundos ");

if (horaValida(h,m,s)) {
    console.log("Son las ", h, "horas con ", m, "minutos y ", s, "segundos");

} else {
    console.log("La hora introducida no es valida");
}