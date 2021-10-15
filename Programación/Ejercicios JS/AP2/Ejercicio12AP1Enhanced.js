function valNumeros(a, b, c) {
    if (a == b && b == c); {
    
        return true;
    } else {
        return false
    }
    
}



let readlinesync = require("readline-sync");
let b, a, c;

a = readlinesync.questionInt("Dime un numero ");
b = readlinesync.questionInt("Dime otro numero ");
c = readlinesync.questionInt("Dime el ultimo numero ");

valNumeros(a,b,c);


