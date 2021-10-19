function tipoCaracter(a) {
    
        if (a <= 10 && a >= 0) {
        return "Has introducido un numero";
        } else if (a >= "a" && a <= "z" || a >= "A" && a <= "Z") {
        return "Has introducido una letra";
        
        } else {
            return "Has introducido otro caracter";
        }
}



let readlinesync, numeritos, letra;
readlinesync = require ("readline-sync");
let a;

do {
    a = readlinesync.question("Dime un caracter ");
    
    console.log(tipoCaracter(a));

    } while (a != ".");


