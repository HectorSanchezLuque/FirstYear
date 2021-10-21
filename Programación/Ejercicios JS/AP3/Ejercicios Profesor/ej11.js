/*
EJERCICIO 10. Programa que permita calcular e imprimir los números primos 
que hay entre el 1 y el 1000. Reutiliza la función primo creada en el 
ejercicio anterior (ejercicio 10). 
*/

function esPrimo(valor) {
    
    if (valor==1 || valor==2) { // Si es el 1 o el 2 es primo
        return true;
    } else {
        let primo = true;  // supongo que el número es primo
        for(let div=2;div<valor;div++) {
           if (valor % div == 0) { // si encuentro un div que lo divida 
               primo = false; // cambio la variable primo a false
           }     
        }
        return primo; // tiene el valor booleano true o false.
    }
}

// Programa Principal

for (let numero=1; numero<=1000; numero++) {
   if (esPrimo(numero)) {
      console.log(numero)
   } 
}
