function primo(a) {
    let verdadero = true;
    for (let b = 2; b < a; b++) {
        if (a % b == 0) {
            verdadero = false
            b = a
        } else {
            verdadero = true;
        }
    }
    return verdadero;
}



let readlineSync, a, b;

readlineSync = require ("readline-sync");

a = readlineSync.questionInt("Dime un numero ");

if (primo(a)) {
    console.log(a , "Es primo");
} else {
    console.log(a , "No es primo");
}
