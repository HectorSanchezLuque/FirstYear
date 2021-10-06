let readlinesync = require ('readline-sync');
let nota = readlinesync.questionInt("¿Que nota tienes? ")
let tiponota = "";

if (nota < 0 || nota > 10) {
    console.log("La nota no es válida");
} else {
    // La nota está entre 0 y 10;
    if (nota <= 5) tiponota = "Nota baja";
    if (nota > 5 && nota <= 7) tiponota = "Nota media";
    if (nota > 7) tiponota = "Nota alta";
    console.log("Tu nota es una: " + tiponota)
}

