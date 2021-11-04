let readlineSync = require ("readline-sync");
let arrayNumeros = [];
let reversedArray = [];
let pregunta = 0;
let i = 0;


do {
    arrayNumeros[i] = readlineSync.questionInt("Dime un numero "); 
    i = i + 1;
    
} while (arrayNumeros[i-1] !== -1)

arrayNumeros.pop();
console.log("Array Numeros", arrayNumeros);
console.log("Array revertido", arrayNumeros.reverse());


if (arrayNumeros[0] == (arrayNumeros[0] = arrayNumeros[arrayNumeros.length-1])) {
    console.log("El vector introducido es capicua");
} else {
    console.log("El vector introducido no es capicua");
}




