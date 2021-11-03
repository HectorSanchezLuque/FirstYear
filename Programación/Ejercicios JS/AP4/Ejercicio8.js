let readlineSync = require ("readline-sync");
let arrayNumeros = [];
let reversedArray = [];
let pregunta = 0;
let i;


do {
    arrayNumeros[i] = readlineSync.questionInt("Dime un numero "); 
    console.log(arrayNumeros);
    i = i + 1;
    
} while (pregunta !== -1)

arrayNumeros.pop();
reversedArray = arrayNumeros.reverse();
console.log(reversedArray);

