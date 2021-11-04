function primo(numero) {
    let verdadero = true
    for (let a = 2; a < numero; a++) {
        if (numero % a == 0) {
            verdadero = false;
            a = numero;
        }
    }
    return verdadero;
}

function rellenarArray(arr) {
    let j = 1
    for (let a = 0; a < arr.length; a++) {
        arr[a] = j
        j++
    }
}


let readlineSync = require ("readline-sync");
let arrayNumerosPrimos, pregunta;

pregunta = readlineSync.questionInt("Cuan grande quieres que sea el array? ");

arrayNumerosPrimos = new Array (pregunta);

rellenarArray(arrayNumerosPrimos)

for (let num of arrayNumerosPrimos) {
    if (primo(num)) {
        console.log(num, "es primo");
    }
}

