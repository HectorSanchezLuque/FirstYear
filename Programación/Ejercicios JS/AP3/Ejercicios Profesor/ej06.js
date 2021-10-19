/*
EJERCICIO 6. Elabora un programa que solicite dos números y muestre su producto 
por el método de las sumas sucesivas:

    Por ejemplo: 	5 x 4 = 20  sería	5 + 5 + 5 + 5 = 20 (sumamos 4 veces el número 5).
    
Debes utilizar una función producto, que reciba como parámetros los dos números 
y visualice el resultado obtenido mediante el procedimiento pedido.
*/

/* FUNCION 1: Esta función realiza el cálculo y devuelve el resultado.
No es realmente la que se pide en el enunciado pero la ponemos como ejemplo*/

function calculaProducto(num1,num2) {
    
    let valor=0; // variable acumulador
    for(let i=1;i<=num1;i++) {
        valor = valor + num2  // sumo o acumulo num1 veces el num2
    }
    return valor;
}

/* FUNCION 2: Esta función realiza el cálculo y visualiza el resultado.
Es la que se pide en el enunciado */
function visualizaProducto(num1,num2) {
    
    let valor=0;
    for(let i=1;i<=num1;i++) {
        valor = valor + num2  // sumo o acumulo num1 veces el num2
    }
    console.log('RESULTADO: ' +valor);    
}

// Programa principal

let readlineSync = require('readline-sync');
let n1 = readlineSync.questionInt('Primer numero a multiplicar: ');
let n2 = readlineSync.questionInt('Segundo numero a multiplicar: ');

// Usando la función 1 
console.log('RESULTADO: ' + calculaproducto(n1,n2));
// Usando la función 2 (realmente esta sería la opción que pide el enunciado)
visualizaProducto(n1, n2);
