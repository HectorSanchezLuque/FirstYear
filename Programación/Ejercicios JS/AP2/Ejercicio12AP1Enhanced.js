function valNumeros(a, b, c) {
    if (a == b || b == c || a == c){
        return false
    } else {
        return true
    }
}

function mNumero(a,b,c) {
    if (a>b && a>c) {
        return a;
    } else if (b > c) {
        return b;
    } else {
        return c;
    }
}




let readlinesync = require("readline-sync");
let b, a, c, mayor;
mayor = 0;

a = readlinesync.questionInt("Dime un numero ");
b = readlinesync.questionInt("Dime otro numero ");
c = readlinesync.questionInt("Dime el ultimo numero ");

if (valNumeros(a, b, c)) {
    mayor = mNumero(a,b,c);
    console.log("El mayor numero es el ", mayor);

} else {
    console.log("Los numeros introducidos no son validos");
}


