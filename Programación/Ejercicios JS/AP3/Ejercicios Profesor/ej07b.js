/*
EJERCICIO 7B. 
VARIANTE DEL EJERCICIO 7. 
Programa que solicita la entrada un carácter por teclado hasta que se introduzca un punto ‘.’. 
En dicho momento deberá parar la ejecución e informar del número de dígitos introducidos, número
de carácteres alfabéticos introducidos y número de otro tipo de carácteres introducido.
Utilizamos la misma función tipoCaracter que se ha programado para el ejercicio 7 
que reciba el carácter y devuelva si es dígito, alfabético u otro.  
*/

function tipoCaracter(caracter) {

    if (caracter.length == 1) {  // si la cadena tiene más de un caracter no hago nada.
        if (caracter >= '0' && caracter <= '9')
            return 1;
        else if (caracter >= 'a' && caracter <= 'z')
            return 2;
        else if (caracter >= 'A' && caracter <= 'Z')
            return 2;
        else
            return 3;
    }
}

// Esta función realiza la misma lógica mediante otro código. Hace uso de operador if ternario.
function tipoCaracterAlternativa(caracter) {
    if (caracter.length == 1) {
        let digito = (caracter >= '0' && caracter <= '9');
        let letra = (caracter >= 'A' && caracter <= 'Z') || (caracter >= 'a' && caracter <= 'z');
        let resultado = digito ? 1 : letra ? 2 : 3;
        return resultado;
    }
}

let readlineSync = require('readline-sync');
let car = readlineSync.question('Dame un caracter. Para finalizar introduce un punto (\.) : ');

let digitos = 0, alfa = 0, otros = 0; // para almacenar el número de carácteres de cada tipo.

while (car != '.') {
    switch (tipoCaracter(car)) {
        case 1: // si devuelve 1 es dígito
            digitos++; // incremento el número de dígitos.
            break;
        case 2: // si devuelve 2 es alfabético
            alfa++; // incremento el número de alfabéticos.
            break;
        case 3: // si devuelve 3 es otro tipo de caracter diferente a los anteriores.
            otros++; // incremento el número de otro tipo de carácteres.
            break;
    }
    // pido un nuevo caracter
    car = readlineSync.question('Dame un caracter. Para finalizar introduce un punto (\.) : ');
}

console.log('Cantidad de digitos (0..9): ' + digitos);
console.log('Cantidad de alfabeticos (A..Z o a..z): ' + alfa);
console.log('Cantidad de otro tipo de caracteres: ' + otros);