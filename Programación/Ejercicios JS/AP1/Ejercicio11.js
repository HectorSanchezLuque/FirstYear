let readlinesync = require ("readline-sync");
let b, a, c;

a = readlinesync.questionInt("Dime un numero ");
b = readlinesync.questionInt("Dime otro numero ");
c = readlinesync.questionInt("Dime el ultimo numero ");

if (a>b && a>c) {
    console.log("A es el mayor numero");
} else if (b>a && b>c) {
    console.log("B es el mayor numero");
 } else if (c>b && c>a) {
    console.log("C es el mayor numero");
 }