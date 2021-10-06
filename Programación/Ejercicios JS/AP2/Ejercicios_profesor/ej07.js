/*
EJERCICIO 7. Programa que solicite la entrada de una letra por teclado 
hasta que se introduzca una vocal. En dicho momento deberá parar la ejecución. 
*/

let readlineSync = require('readline-sync');

// Declaracion de las variables del programa
let letra;
let continuar = true;

do {
  // introduzco la letra
  letra = readlineSync.question('Dame una letra: ');
  if (letra == 'X' || letra == 'x') {
    // Si se ha introducido la 'X' o 'x' cambio el valor de la variable continuar
    // para que finalice el bucle
    continuar = false;
    // posible uso operador if ternario: continuar = (letra == 'X' || letra == 'x') ? false : true;
  }
} while (continuar);

// puedo avisar del fin del programa
console.log('Fin de programa');



