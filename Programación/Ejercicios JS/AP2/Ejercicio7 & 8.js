let a = 0, readlinesync, numeritos, letra;
readlinesync = require ("readline-sync");
numeritos = 0;

do {
    
    letra = readlinesync.question("Quieres continuar? ");
    letra.toLowerCase();
    
    if (letra == "x" || letra == "X") {
    a++;
    numeritos = numeritos + 1;
    }

} while (!(letra === "0"));
console.log("Han sido introducidos: ", numeritos, "numeros");