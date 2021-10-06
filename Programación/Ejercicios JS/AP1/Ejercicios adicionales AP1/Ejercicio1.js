let readlineSync = require('readline-sync');
let tiempoExtra
let tiempo = readlineSync.questionInt('Cuantos minutos has hablado? ');

if (tiempo<= 180) {
    console.log("Solo has de pagar ", 10, "euros");
}
    if (tiempo>180 && tiempo<=240) {
        tiempo = ((tiempo-180) * 10) / 100
    console.log("Has de pagar ",tiempo, "euros que, sumados a los", 10, "euros de tu tarifa base, suman un total de", 10 + tiempo, "euros");
    }
    if (tiempo>240) {
        tiempoExtra = ((tiempo-240) * 20) / 100;
        tiempo = ((tiempo-240) * 10) / 100;
        console.log("Has de pagar ",tiempo, "euros que, sumados a los", 10, "euros de tu tarifa base, suman un total de", 10 + tiempo, "euros que a su vez, sumados a los minutos extra que te has pasado hablando despues de los 240 minutos, suman un total de: ", 10+tiempo+tiempoExtra, "euros");
}
