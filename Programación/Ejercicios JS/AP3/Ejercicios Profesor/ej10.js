/*
EJERCICIO 10. Programa que pida un número positivo por teclado e informe si es un
número primo o no. Un número entero mayor que 1 se denomina número primo si sólo 
tiene como divisores positivos (factores) a sí mismo y a la unidad. 
Para resolver el ejercicio deberás utilizar una función primo que recibirá el número
a analizar y devolverá si es primo –true- o no lo es –false-.
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

// Programa principal

let readlineSync = require('readline-sync');
let numero = readlineSync.questionInt('Dame un numero: ');

if (esPrimo(numero)) 
    console.log(numero + ' ES PRIMO')
else  
    console.log(numero + ' NO ES PRIMO');
