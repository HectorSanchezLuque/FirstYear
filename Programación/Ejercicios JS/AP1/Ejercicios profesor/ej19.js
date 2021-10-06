/*
EJERCICIO 19. Programa que te permita ingresar el total de ventas alcanzado por un vendedor
durante un mes y posteriormente calcule la comisión que recibirá atendiendo
a la siguiente tabla de comisiones:
De 0..999 -> 0% de comisión
De 1000..4999 -> 3% de comisión
De 5000..19999 -> 5% de comisión
De 20000.. en adelante -> 8% de comisión 
*/

let readlnSync = require('readline-sync');
let totalVentas = readlnSync.question('Introduce el total de ventas realizadas: ');

let porcenComision = 0;
let comision;

if (totalVentas < 0)
    console.log('Las ventas no pueden ser negativas')
else {
    // establecemos el porcentaje de la comisión según el total de ventas realizadas 
    if (totalVentas >= 1000 && totalVentas < 5000)
        porcenComision = 0.03;
    else if (totalVentas >= 5000 && totalVentas < 20000)
        porcenComision = 0.05;
    else if (totalVentas >= 20000)
        porcenComision = 0.08;
}

comision = totalVentas * porcenComision;
console.log('Tus ventas de', totalVentas, 'euros, tienen una comision de', comision, 'euros');
console.log('El porcentaje aplicado es del', porcenComision * 100, "%");






