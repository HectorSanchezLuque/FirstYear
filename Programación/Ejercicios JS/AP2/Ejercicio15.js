const { keyInYN } = require("readline-sync");

let numerito, readlineSync, pregunta;
readlineSync = require("readline-sync")

const leastYears = 100
const mediumYears = 115
const longerYears = 130

do {
    pregunta = readlineSync.questionInt("Dime la antiguedad del empleado para calcular su gratificacion ");
    if (pregunta > 20) {
        console.log("La empresa no es tan antigua");
    
    } else if (pregunta >= 3 && pregunta < 10) {
        console.log("La gratificacion de este empleado es: ", pregunta * leastYears, "Euros");

    } else if (pregunta >= 10 && pregunta <= 15) {
        console.log("La gratificacion de este empleado es: ", pregunta * mediumYears, "Euros");

    } else if (pregunta > 15) {
        console.log("La gratificacion de este empleado es: ", pregunta * longerYears, "Euros")
    }
    pregunta = keyInYN("Quieres volver a calcular otra gratificacion? ");

} while(pregunta == true)