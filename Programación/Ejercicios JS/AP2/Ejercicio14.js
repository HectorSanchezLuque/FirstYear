let numerito, readlineSync, pregunta, trys;
trys = 0
readlineSync = require("readline-sync")
numerito = Math.random();
    numerito = numerito * 100;
    numerito = Math.trunc(numerito) + 1;

pregunta = readlineSync.questionInt("Que numero estoy pensando? ")

do {
    pregunta = readlineSync.questionInt("Vuelve a intentarlo ")


    if (pregunta == numerito) {
        console.log("Has acertado!!")
        console.log(trys)

    } else if (pregunta > numerito) {
        console.log("So far away")

    } else if (pregunta < numerito) {
        console.log("So close no matter how far...")
    }

    if (pregunta !== numerito) {
        trys = trys + 1
    }

} while (pregunta !== numerito);