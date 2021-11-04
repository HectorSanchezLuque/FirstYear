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



let readlineSync = require ("readline-sync");
let arrayNumerosPrimos, pregunta;

pregunta = readlineSync.questionInt("Cuan grande quieres que sea el array? ");

arrayNumerosPrimos = new Array (pregunta);

for (let a = 0; a < arrayNumerosPrimos.length; a++) {
    pregunta = readlineSync.questionInt("Dime un numero ");
    if (primo(pregunta) == true) {
        arrayNumerosPrimos[a] = pregunta;
    }

}
console.log(arrayNumerosPrimos);
