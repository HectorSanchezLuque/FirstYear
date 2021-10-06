let readlinesync = require("readline-sync");
let a;
a = readlinesync.questionInt("Dime un mes ");


//Enero 31, Febrero 28, Marzo 31, Abril 30, Mayo 31, junio 30, julio 31, agosto 31, septiembre 30, octubre 31, noviembre 30
//diciembre 31

if (a===1 || a===3 || a===5 || a===7 || a===8 || a===10 || a===12) {
    console.log("Es un mes de 31 dias");
}
if (a===4 || a===6 || a===9 || a===11) {
    console.log("Es un mes de 30 dias");
}
if (a===2) {
    console.log("Es un mes de 28 o 29 dias, depende del año");
}