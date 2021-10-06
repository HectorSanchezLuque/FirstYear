let readlinesync = require ("readline-sync");
let t, m, 

v = readlinesync.questionInt("A que velocidad va? ");
t = readlinesync.questionInt("En cuanto tiempo? ");

m = v * t;

console.log("La distancia recorrida son: ", m, "m");