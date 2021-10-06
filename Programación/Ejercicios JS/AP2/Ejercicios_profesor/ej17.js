/*
EJERCICIO 17. Programa que permita calcular e imprimir los primeros 50 números primos que existen a partir del número 1.
Recuerda: número primo es aquel que solamente es divisible por él mismo y por la unidad. 
*/


let esprimo; //variable booleana que marca si un número es primo o no.
let numero = 2; // variable que almacena los números a comprobar si son primos
let cantidadPrimos = 0; // variable que controla la cantidad de numeros primos obtenidos.
                        // cuando llegue a 50 debe parar.

do {
    esprimo = true;
    for (let divisor=2;divisor<numero;divisor++) {
        if (numero % divisor == 0) 
        // si el resto de la división es 0 es que numero es divisible por divisor
        // y por tanto no es primo. Cambiamos la variable esprimo a false
        esprimo = false;
    }
    if (esprimo == true) { // si es primo lo visualizo por consola
        cantidadPrimos++; // incremento la cantidad de numeros primos obtenidos
        console.log("Numero primo: " + numero + ' Orden del número: ' + cantidadPrimos);
    }
    numero++; // incremento el número a comprobar si es primo
    
} while (cantidadPrimos <50);
