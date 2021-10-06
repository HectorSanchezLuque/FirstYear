/*
EJERCICIO 9. Programa que permita ingresar caracteres
y nos indique al final cuántos se han introducido entre el ‘0’ y ‘9’.
El programa finalizará cuando se le introduzca el carácter ‘.’ (Punto). 
*/

let dato;   // caracter a pedir por teclado
let numDigitos = 0; // Acumulador para la cantidad total de vocales

let readlineSync = require('readline-sync');

do {
  // Pido el caracter/letra
  dato = readlineSync.question("Introduce un caracter/letra: ");
  if (dato >= '0' && dato <= '9') {   // puedo hacer esta condición 
                                      // al ser correlativos en el codigo ASCII
      numDigitos++;
  }
} while (dato != '.');

// Una vez fuera del bucle, visualizo los resultados.
console.log("La cantidad total de caracteres entre el '0' y el '9' es",numDigitos);





