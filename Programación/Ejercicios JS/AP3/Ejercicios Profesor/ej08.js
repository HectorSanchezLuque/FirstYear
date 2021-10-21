/*
EJERCICIO 8. Programa que permita obtener una combinación de lotería primitiva 
(6 números entre 1 y 49). Para generar los números de forma aleatoria puedes 
utilizar el método random del objeto Math.
Cada número debe generarse mediante la llamada a la función dameNumero(), 
que retornará un número al azar entre 1 y 49. 

*/

function dameNumero() {
    
    let valor = Math.random()*49; // obtenemos un número al azar entre 0 y 49 (con decimales)
    valor = valor + 1; // transformo el número para que esté entre 1 y 50 máximo.
    valor = Math.trunc(valor); // obtengo la parte entera prescindiendo de los decimales.
    return valor;

    // de forma abreviada podría ser 
    // return (Math.trunc(Math.random()*49+1));
}

// Programa principal

let azar; // variable para almacenar cada número obtenido
for (num=1;num<=6;num++) {
    azar = dameNumero();
    console.log('Numero ' + num + ':' + azar);
}




