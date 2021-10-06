/*
EJERCICIO 2. Programa que solicite la edad de 4 personas y 
muestre cuantos son mayores de edad y menores de edad.
*/


let readlineSync = require('readline-sync');

// Defino en inicializo las variables que me harán falta en el programa
let edad = 0, mayoresEdad = 0 , menoresEdad = 0;

for (let i=1; i<=4; i++) {
    // Se pide la edad de una persona
    edad = readlineSync.question('Indica la edad de la persona ' + i + ': ');
    if (edad >= 18) {
        // Es mayor de edad, por lo que incremento en uno la variable mayoresEdad
        mayoresEdad++;
    } else {
        // Es menor de edad, por lo que incremento en uno la variable menoresEdad
        menoresEdad++;
    }
}
// Visualizo los resultados
console.log('Personas mayores de edad son', mayoresEdad , 'y menores de edad son', menoresEdad);
