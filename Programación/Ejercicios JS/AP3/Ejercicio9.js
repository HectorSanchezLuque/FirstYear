function calculaSuma(numeritos, numeritos2) {
    let sumaTotal = 0;
    if (numeritos > numeritos2) {
        for (let a = numeritos2; a < numeritos; a++) {
            if (a % 2 == 0) {
                sumaTotal = sumaTotal + a
            }
        }
        
    } else {
        for (let a = numeritos; a < numeritos2; a++) {
            if (a % 2 == 0) {
                sumaTotal = sumaTotal + a
            }

    }
    return sumaTotal;
}
}



let readlinesync, numeritos, numeritos2;
readlinesync = require ("readline-sync");

numeritos = readlinesync.questionInt("Dime un numero ");
numeritos2 = readlinesync.questionInt("Dime otro numero ");

console.log(calculaSuma(numeritos,numeritos2));
