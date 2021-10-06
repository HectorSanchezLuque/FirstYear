/*
EJERCICIO 16. Programa que permita calcular e imprimir los números primos que hay entre el 1 y el 1000.  
Un número entero mayor que 1 se denomina número primo 
si sólo tiene como divisores positivos (factores) a sí mismo y a la unidad
*/

let esprimo; //variable booleana que marca si un número es primo o no.

for (let numero=2; numero<=1000; numero++) {
    // numero tomará valores de 2 a 1000. Comprobaremos para cada uno si es primo o no.
    // suponemos que número es primo
    esprimo = true;
    for (let divisor=2;divisor<numero;divisor++) {
        if (numero % divisor == 0) 
        // si el resto de la división es 0 es que numero es divisible por divisor
        // y por tanto no es primo. Cambiamos la variable esprimo a false
            esprimo = false;
    }
    if (esprimo == true) { // si es primo lo visualizo por consola
        console.log(numero);
    }
    
}
