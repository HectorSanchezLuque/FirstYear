/*
EJERCICIO 5. Programa que muestre los primeros 50 números múltiplos de 3 a partir del número 1.
*/

let cantidadNumeros = 1; numero = 0;

console.clear(); // produce un borrado de la información existente en la consola.
console.log('Los primeros 50 numeres multiplos del 3 son:');
do {
   numero++; // incremento el número que voy a considerar si es multiplo de 3
   if (numero % 3 == 0) {
      // el número es múltiplo de 3, por lo que lo visualizo
        console.log("Posicion ",cantidadNumeros,":",numero);
      // incremento la cantidad de números múltiplos que he encontrado.
        cantidadNumeros++;
   } 
} while (cantidadNumeros <= 50) // mientras la cantidad de números encontrados sea menor o igual que 50 continuamos.


