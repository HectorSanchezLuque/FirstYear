/*
EJERCICIO 16. Programa que solicite una vocal e indique el número / orden de la misma,
teniendo en cuenta que la “A” sería la primera y la “U” sería la quinta.
Comprobamos también que el caracter suministrado es vocal (mayúscula o minúscula) 
*/

let valido = true;
let readlineSync = require('readline-sync');
let vocal = readlineSync.question('Introduce una vocal: ');
vocal = vocal.toLowerCase(); // convierto el caracter suministrado a minúscula

valido = (vocal == 'a') || (vocal == 'e') || (vocal == 'i') ||
    (vocal == 'o') || (vocal == 'u');

if (!valido) // esta condición es lo mismo que (valido==false)
    console.log('el dato suministrado no es vocal')
else
    switch (vocal) {
        case 'a':
            console.log(vocal, 'es la primera vocal');
            break;
        case 'e':
            console.log(vocal, 'es la segunda vocal');
            break;
        case "i":
            console.log(vocal, 'es la tercera vocal');
            break;
        case "o":
            console.log(vocal, 'es la cuarta vocal');
            break;
        case "u":
            console.log(vocal, 'es la quinta vocal');
            break;
    }