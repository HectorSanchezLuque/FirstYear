// EJERCICIO 3. Programa que pida la edad de 2 hermanos e informe de la diferencia
// de edad existente entre ambos. Debes utilizar una función diferenciaEdad, 
// que reciba las dos edades y retorne en valor positivo la diferencia entre ambos.

function diferenciaEdad(edad1, edad2) {
    if (edad1>edad2) {
        return edad1-edad2;
    } else {
        return edad2-edad1;
    }
}

// Programa principal

let diferencia=0;  // variable que almacenará la diferencia

let readlineSync = require('readline-sync');
let edadH1 = readlineSync.questionInt('Dime la edad del primer hermano: ');
let edadH2 = readlineSync.questionInt('Dime la edad del segundo hermano: ');

diferencia = diferenciaEdad(edadH1,edadH2);
console.log('La diferencia de edad es de ' + diferencia + ' años');

// También válido (en sustitución de lineas 21 y 22):
// console.log('La diferencia de edad es de ' + diferenciaEdad(edadH1,edadH2) + ' años');


