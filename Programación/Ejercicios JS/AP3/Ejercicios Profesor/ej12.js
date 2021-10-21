/*
EJERCICIO 12. Realiza un programa que, tras introducir precios iniciales de productos,
calcule sus  precios finales teniendo en cuenta que:
• Se debe aplicar un descuento (pedido por teclado) que puede variar entre el 0% y el 20%. 
• Se debe aplicar un tipo de IVA (16%) que es siempre el mismo.
El programa debe visualizar el precio del producto final (aplicado el descuento y el IVA)
debiendo calcularse este dato mediante la utilización de una función.
El programa finalizará cuando se introduzca un producto con precio inicial igual cero (0).
*/

function calculaPF(pre,desc) {
    const iva = 0.16; // valor del IVA es constante
    let cantDescuento = pre * desc;
    pre = pre - cantDescuento; // al precio le quitamos la cantidad de descuento
    pre = pre + pre * iva // al precio le incrementamos el IVA.
    return pre;  // devolvemos el precio final
}

// función adicional que devuelve redondeado a dos decimales el número que se recibe
// como parámetro (extraida de StackOverFlow --> interesante)
function redondeaDos(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}

// Programa principal

let readlineSync = require('readline-sync');
// pedimos el precio primer precio inicial (entero)
let precioInicial = readlineSync.questionFloat('Dime el precio Inicial: ');

// mientras el precio inicial sea distinto de 0.
while (precioInicial != 0) {
    // Borro los datos del terminal y visualizo el precio inicial
    console.clear();
    console.log('El precio inicial es ' + precioInicial);
    // pedimos el descuento mientras no esté entre 0 y 20
    do {
        descuento = readlineSync.questionInt('Dime el descuento: ');
    } while (descuento<0 || descuento>20); 

    // calculamos el precioFinal llamando a la función y visualizamos su valor
    precioFinal = calculaPF(precioInicial,descuento/100);
    
    console.log('El descuento es de un ' + descuento + '%');
    console.log('El precio final con un IVA del 16% es ' + redondeaDos(precioFinal));
    
    // volvemos a pedir otro precio Inicial y borramos los datos del terminal.
    precioInicial = readlineSync.questionFloat('Dime el precio Inicial: ');
}

console.log('Fin de programa')

