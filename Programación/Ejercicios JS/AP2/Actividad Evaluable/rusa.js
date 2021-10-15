let readlineSync, multiplicador, multiplicando, multiplicandoTotal, acumulacion;
multiplicador = 0;
multiplicando = 0;
multiplicandoTotal = 0;
numero1 = 0;
numero2 = 0;
acumulacion = 0;

readlineSync = require("readline-sync");

multiplicando = readlineSync.questionInt("Dime el multiplicando ");

multiplicador = readlineSync.questionInt("Dime el multiplicador ");



while (multiplicador > 1) {
    multiplicador = Math.trunc(multiplicador / 2);

    if (multiplicador % 2 !== 0) {
        acumulacion = multiplicando*2;
    }

    multiplicando = multiplicando * 2;

    multiplicandoTotal = multiplicando + multiplicandoTotal;

    console.log(multiplicador, Math.trunc(multiplicando,), acumulacion);
}



