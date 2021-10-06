/*
EJERCICIO 17. Programa que lea una variable numérica <mes> 
e indique si el valor corresponde a un mes de 30, 31 o 28 días. 
Se mostrará además el nombre del mes. 
Se debe comprobar que el valor introducido esté comprendido entre 1 y 12. 
*/

let readlineSync = require('readline-sync');
let numMes = readlineSync.question('Introduce un MES en formato numerico (1..12): ');

switch (numMes) { 
    case '1':
        console.log('El mes de ENERO tiene 31 días');
        break;
    case '2':
        console.log('El mes de FEBRERO tiene 28 días');
        break;
    case '3':
        console.log('El mes de MARZO tiene 31 días');
        break;
    case '4':
        console.log('El mes de ABRIL tiene 30 días');
        break;
    case '5':
        console.log('El mes de MAYO tiene 31 días');
        break;
    case '6':
        console.log('El mes de JUNIO tiene 30 días');
        break;
    case '7':
        console.log('El mes de JULIO tiene 31 días');
        break;
    case '8':
        console.log('El mes de AGOSTO tiene 31 días');
        break;
    case '9':
        console.log('El mes de SEPTIEMBRE tiene 30 días');
        break;
    case '10':
        console.log('El mes de OCTUBRE tiene 31 días');
        break;
    case '11':
        console.log('El mes de NOVIEMBRE tiene 30 días');
        break;
    case '12':
        console.log('El mes de DICIEMBRE tiene 31 días');
        break;
    default:
        console.log('El dato suminstrado como número de mes NO ES VALIDO')
        break;
}