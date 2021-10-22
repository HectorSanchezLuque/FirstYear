function primo(numero) {
    let verdadero = true;
    for (let a = 2; a < numero; a++) {
        if (numero % a == 0) {
            verdadero = false;
            a = numero;

        }
    }
    return verdadero;

}

let readlineSync, numero;

readlineSync = require ("readline-sync");

numero = readlineSync.questionInt("Dime un numero ");

if (primo(numero)) {
    console.log(numero, "Es un numero primo");
} else  {
    console.log(numero, "No es un numero primo");
}