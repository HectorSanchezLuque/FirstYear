function ecuacion(discriminante) {
    if (discriminante >= 0) {
        x2 = (-b - Math.sqrt(discriminante))/(2*a);
        x1 = (-b + Math.sqrt(discriminante))/(2*a);
    } else {
        return false
    }
}







let readlinesync = require ('readline-sync');
let a, b, c, x1, x2;

a = readlinesync.questionInt("Dime el valor de a ");
b = readlinesync.questionInt("Dime el valor de b ");
c = readlinesync.questionInt("Dime el valor de c ");

let resultados = ecuacion(discriminante)
console.log(resultados)