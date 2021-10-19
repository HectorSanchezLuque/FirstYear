// EJERCICIO 2. Programa que pida un número y muestre si el número es múltiplo de 10.
// Deberás utilizar una función esMultiplo, que recibirá el número correspondiente
// y devuelva true si es múltiplo de 10 y false si no lo es. 

function esMultiplo(valor) {
    if (valor % 10 == 0 ) {
        return true;
    } else {
        return false;
    }
}

// Programa principal

let readlineSync = require('readline-sync');
let numero = readlineSync.questionInt('Dime un numero: ');

if (esMultiplo(numero)) {   
    console.log(numero + ' es MULTIPLO de 10');
} else {
    console.log(numero + ' NO es MULTIPLO de 10');
}
