let readlinesync = require("readline-sync");
let ventas;

ventas = readlinesync.questionInt("Cuanto ha vendido? ");

if (ventas<=999) {
    console.log("Te quedas sin comisión");
}
if (ventas>=1000 && ventas<=4999) {
    console.log(ventas + (ventas*0.03));
    console.log("El porcentaje aplicado es del 3%");
}
if (ventas>=5000 && ventas<=19999) {
    console.log(ventas + (ventas*0.05));
    console.log("El porcentaje aplicado es del 5%");
}
if (ventas>=20000) {
    console.log(ventas + (ventas*0.08));
    console.log("El porcentaje aplicado es del 8%");
}