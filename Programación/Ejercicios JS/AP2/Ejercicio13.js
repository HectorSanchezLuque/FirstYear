let readlineSync = require('readline-sync');
let temperatura, tMax, tMin;
tMax = 0;
tMin = 500;
do {
    temperatura = readlineSync.questionInt("Dime las temperaturas ");
    if (temperatura > tMax && temperatura < 5500) {
        tMax = temperatura
    }
    if (temperatura <tMin) {
        tMin = temperatura
    }

} while (temperatura !== 5500)

console.log("La temperatura maxima ha sido: ", tMax,"grados y la minima: ", tMin, "grados");