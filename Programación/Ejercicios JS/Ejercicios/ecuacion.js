let readlinesync = require ('readline-sync');
let a, b, c, x1, x2;

a = readlinesync.questionInt("Dime el valor de a ");
b = readlinesync.questionInt("Dime el valor de b ");
c = readlinesync.questionInt("Dime el valor de c ");

let discriminante = b**2-4*a*c;

if (discriminante >= 0) {
    x2 = (-b - Math.sqrt(discriminante))/(2*a);
    x1 = (-b + Math.sqrt(discriminante))/(2*a);
   
    console.log("x1 :", x1);
    console.log("x2 :", x2);

} else {
    console.log("No hay ninguna solución "); 
}