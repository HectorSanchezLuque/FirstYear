/*
EJERCICIO 18. Realiza un programa que, tras introducir el precio inicial de un producto sin IVA,
calcule su precio final teniendo en cuenta que:
    Se le puede aplicar dos tipos de IVA (16% o 21%). Se deberá preguntar este dato.
El programa debe informar del precio del producto sin IVA y con IVA,
y finalizará cuando se introduzca un producto con precio cero (0).
Esta solución resuelve el problema utilizando un DO..WHILE como repetitiva.
*/

/* Esta solución tiene un problema (que se podría resolver):
Cuando el precioInicial es 0, nos sigue pidiendo el IVA 
y realiza los cálculos una vez más. Después termina.
Sería más óptima la solución realizada en el archivo ej18a.
*/


let precioInicial; // Dato del precio inicial a pedir por teclado
let tipoIVA; // Dato del IVA a pedir por teclado
let precioFinal; // Variable donde almacenaremos el precio final

let readlineSync = require('readline-sync');

do {
    
    precioInicial = readlineSync.questionInt('Introduce el precio Inicial: ');
    // Pido el tipo de IVA mientras no esté en el rango especificado [16..21]
    do {
        tipoIVA = readlineSync.questionInt('Introduce el tipo de IVA: ')
    } while (tipoIVA < 16 || tipoIVA > 21);    

    // calculo el precio final
    precioFinal = precioInicial + precioInicial*(tipoIVA/100);

    // Visualizo el precio inicial y final del producto.
    console.log('Precio Inicial: ' + precioInicial);
    console.log('Precio Final: ' + precioFinal);
    console.log('Tipo de IVA aplicado: ' + tipoIVA + '%');
    console.log('--------------------------------------------');
        
} while (precioInicial != 0);

// Aviso de fin de programa
console.log('Fin de programa');
