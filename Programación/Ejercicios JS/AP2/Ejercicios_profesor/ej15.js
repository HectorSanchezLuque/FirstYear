/*
EJERCICIO 15. Programa que permita calcular la gratificación de cada empleado de una empresa
con motivo de la celebración del 20 aniversario de la organización.
Se deberá de leer el nombre y número de años que el empleado lleva en la empresa (antigüedad).
La gratificación se calculará en base a la siguiente regla sobre los años trabajados en la empresa:
    Más de 3 años y menos de 10 años --> 100 euros por cada año de antigüedad
    Entre 10 y 15 años (ambos incluidos) --> 115 euros por cada año de antigüedad
    Más de 15 años -->	130 euros por cada año de antigüedad
El programa deberá finalizar cuando se responda “N” a la siguiente pregunta:
    ¿Deseas calcular la gratificación de otro empleado (S/N)?.
*/

let nombre, anyos; // Almacenan el nombre de la personas y años trabajados
let continuar; // variable para controlar el bucle 
let readlineSync = require('readline-sync');

do {
  
    // petición de datos
    nombre = readlineSync.question('Dime tu nombre: ');
    anyos = readlineSync.questionInt('Anyos trabajados: ');

    if (anyos <=3) {
        console.log('No dispones de gratificacion.');
    } else if (anyos>3 && anyos<10) {
            console.log('Tu gratificacion por cada año es de 100 euros. Total: ' + anyos*100);
      } else if (anyos >=10 && anyos <= 15) {
                console.log('Tu gratificacion por cada año es de 115 euros. Total: ' + anyos*115);
        } else {
                console.log('Tu gratificacion por cada año es de 130 euros. Total: ' + anyos*130);
            }      
        
    // continuar calculando nuevas gratificaciones para otros empleados?...
    continuar = readlineSync.question('Deseas calcular la gratificacion de otro empleado (S/N)?: ');
    // Continuará realizando el bucle siempre que contestemos 'S' o 's'. En caso contrario sale del bucle.
} while (continuar == 'S' || continuar == 's');
