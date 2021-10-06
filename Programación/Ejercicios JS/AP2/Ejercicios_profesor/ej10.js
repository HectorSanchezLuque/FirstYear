/*
Programa que permita obtener una combinación de lotería primitiva (6 números entre 1 y 49).
Para generar los números de forma aleatoria puedes utilizar el método random del objeto Math.

Esta solución no controla que no puedan haber números repetidos en la combinación resultante.
Para controlarlo sería necesario utilizar arrays/arreglos. Lo veremos más adelante.
*/

let numLoteria;   // numero a generar.

// Imprimo por pantalla una cabecera
console.log("Combinación de Lotería Primitiva: ");

for(let i=1; i<=6; i++) {
  numLoteria = Math.random();  // genera un número aleatorio entre 0 y 1. 
  numLoteria = numLoteria * 49; // se transforma el número generado al rengo [0..49]
  numLoteria = Math.round(numLoteria);

  // Todo lo anterior se puede realizar en una sola instrucción:
  // numLoteria = Math.round(Math.round()*49);

  // visualizo el número generado y transformado
  console.log('Numero',i,': ',numLoteria);
}


