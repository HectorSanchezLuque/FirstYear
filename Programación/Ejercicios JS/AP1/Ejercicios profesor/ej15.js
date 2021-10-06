/*
EJERCICIO 15. Programa que tras leer un número entre 1 y 10, 
muestre su equivalente en número romano. 
*/

let readlineSync = require('readline-sync');
let numero = readlineSync.question('Introduce numero entre 1 y 10: ');

// valido que el número esté en el rango correcto
switch (numero) { 
    case '1':
        console.log(numero,'en romano es I');
        break;
    case '2':
        console.log(numero,'en romano es II');
        break;
    case "3":
        console.log(numero,'en romano es III');
        break;
    case "4":
        console.log(numero,'en romano es IV');
        break;
    case "5":
        console.log(numero,'en romano es V');
        break;
    case "6":
        console.log(numero,'en romano es VI');
        break;
    case "7":
        console.log(numero,'en romano es VII');
        break;
    case "8":
        console.log(numero,'en romano es VIII');
        break;
    case "9":
        console.log(numero,'en romano es IX');
        break;
    case "10":
        console.log(numero,'en romano es X');
        break;
    default:
        console.log('El numero suministrado no es valido');
        break;
}