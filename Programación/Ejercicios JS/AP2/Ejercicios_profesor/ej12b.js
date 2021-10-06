/*
EJERCICIO 12. 
Programa que pida por teclado una contraseña.
Mientras la contraseña suministrada sea distinta a la palabra “ALDEBARAN” deberá seguir pidiéndola.
Si se introduce la contraseña correcta el programa deberá informar de ello.
Deberás controlar que sólo hay 5 intentos para introducir la contraseña.
Tras agotarlos el programa debe finalizar informando que no se ha suministrado la contraseña correcta.
*/

let readlineSync = require('readline-sync');

const palabra = 'ALDEBARAN'; // guardo la contraseña en la constante 'palabra'
let password;   // variable para almacenar la contraseña suministrada por teclado.
let passCorrecto = false;  // para controlar si se suministra la contraseña correcta
let intentos = 0; // contador que controla el número de intentos. El máximo son 5 e inicialmente vale 0.

do {
    password = readlineSync.question('Introduce la contraseña: ');
    intentos++; // incrementamos el número de intentos.
    if (password==palabra) {
      passCorrecto = true;
    }
} while (passCorrecto==false && intentos<5);

// Debemos comprobar si nos hemos salido del bucle porque la contraseña suministrada es correcta 
// o porque hemos agotado el número de intentos permitidos.
if (passCorrecto) {
  console.log('La contraseña suministrada es correcta... En el intento', intentos);
} else { 
      console.log('Has agotado el número de intentos. La contraseña era', palabra);
}



