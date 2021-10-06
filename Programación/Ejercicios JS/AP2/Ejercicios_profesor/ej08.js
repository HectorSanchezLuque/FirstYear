/*
EJERCICIO 8. Elabora un programa que pida números por teclado
y finalice cuando introduzcamos el número 0. 
Debe informarnos cuantos números se han introducido el total 
y de ellos cuantos son pares y cuantos impares. 
*/

let numero;   // numero a pedir por teclado
let cantTotalNum = 0; // Acumulador para la cantidad total de números introducidos
let cantPares= 0; // Acumulador para la cantidad de números pares introducidos
let cantImpares = 0;   // Acumulador para la cantidad de números pares introducidos

let readlineSync = require('readline-sync');

do {
  // Pido el número
  numero = readlineSync.questionInt("Introduce un numero: ");
  // Si el numero es cero no lo considero
  if (numero != 0) {
      // incremento el contador de número introducidos
      cantTotalNum++;
      if (numero % 2 == 0) {
        // el número es par e incremento el contador de números pares 
        cantPares++;
      } else {
        // el número es impar e incremento el contador de números impares
        cantImpares++;
        
      }
  }
} while (numero != 0);

// Una vez fuera del bucle, visualizo los resultados.
console.log('La cantidad total de numeros introducidos es',cantTotalNum);
console.log('Numeros pares: ',cantPares,' Numeros impares: ',cantImpares);




