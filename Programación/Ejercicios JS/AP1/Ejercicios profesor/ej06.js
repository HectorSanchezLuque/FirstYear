/*
EJERCICIO 6. Programa que pida la edad de 2 hermanos 
y muestre un mensaje indicando la edad del mayor y 
cuantos años de diferencia tiene con el menor. 
*/

// petición de datos
let readlineSync = require('readline-sync');
let edadHermano1 = readlineSync.question('Introduce la edad del primer hermano: ');
let edadHermano2 = readlineSync.question('Introduce la edad del segundo hermano: ');

if (edadHermano1 == edadHermano2) 
    console.log('Los hermanos tienen la misma edad');
else { 
    if (edadHermano1 > edadHermano2) {
        console.log('La edad del hermano mayor es ' + edadHermano1);
        diferencia = edadHermano1 - edadHermano2;
    } else {
        console.log('La edad del hermano mayor es ' + edadHermano2);
        diferencia = edadHermano2 - edadHermano1;
        }
    console.log('La diferencia de edades es ' + diferencia);
    }