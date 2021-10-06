let readlinesync = require ("readline-sync");
let b, a, c 

a = readlinesync.questionInt("Dime la primera nota ");
b = readlinesync.questionInt("Dime la segunda nota ");
c = readlinesync.questionInt("Dime la tercera nota ");

let notaMedia = (a + b + c) / 3;

console.log("La nota media es ", notaMedia);