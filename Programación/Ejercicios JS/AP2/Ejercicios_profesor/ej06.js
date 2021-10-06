/*
EJERCICIO 6. Programa que muestre los términos de la siguiente serie (1, 3, 7, 15, 31, …) que sean menores de 1000.
La serie sigue la siguente regla: n = (n-1)*2 + 1
*/

let numero = 1;

console.log('Primera forma de hacerlo (con while):')

while (numero < 1000) {
  // muestro el numero
  console.log(numero);
  // calculo el siguiente número de la serie
  numero = (numero * 2) + 1;
}



// Otra forma utilizando el for - No es muy normal utilizar esta con el incremento especificado
console.log('Segunda forma de hacerlo (con for):')
for (numero=1; numero<1000; numero = (numero*2)+1) {
  console.log(numero);
}
