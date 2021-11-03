let readlineSync = require ("readline-sync");
let array1 = [];
let array2 = [];
let pregunta = 0
let i = 0

console.log("Introduce los valores del primer array");
do {
    
    pregunta = readlineSync.questionInt("Dime un numero ");

    array1[i] = pregunta;
    i = i + 1
    console.log(i)
    console.log(array1)


} while (pregunta !== 0);
i = 0;

console.log("Introduce los valores del segundo array");
do {
    
    pregunta = readlineSync.questionInt("Dime un numero ");

    array2[i] = pregunta;
    i = i + 1
    console.log(i)
    console.log(array2)


} while (pregunta !== 0);
array1.pop()
array2.pop()

console.log("array 1", array1);
console.log("array 2", array2)

if (array1.length == array2.length) {
    for (let a = 0; a < array1.length; a++) {
        console.log(array1[a], "*", array2[a], "=", array1[a] * array2[a]);
    }
} else {
    console.log("Los arrays no tienen la misma longitud, no puedo calcularlos");
}