/*
EJERCICIO 11.
Programa que permita mostrar la suma de los números impares comprendidos 
entre dos valores numéricos enteros y positivos introducidos por teclado.
*/

let numInicio;   // numero de inicio a pedir del intervalo.
let numFinal;  // numero final a pedir del intervalo.

let readlineSync = require('readline-sync');
numInicio = readlineSync.questionInt('Dame el numero inicial: ');
numFinal = readlineSync.questionInt('Dame el numero final: ');

// valido inicialmente que el número de inicio es menor que el de final.
// ya que en caso contrario no podría hacer el recorrido con un bucle.
// También valido en la misma expresión que ambos son positivos

if (numInicio > numFinal || numInicio <0 || numFinal<0) {
  console.log('Los numeros suministrados no son correctos');
} else {
  // puedo recorrer desde el inicio hasta el final
  for (let num=numInicio; num<=numFinal; num++) {
    // Compruebo si num es impar
    if (num % 2 == 1) {
      // si es impar lo visualizo, y si no no hago nada
      console.log(num);
    }
  }
}

