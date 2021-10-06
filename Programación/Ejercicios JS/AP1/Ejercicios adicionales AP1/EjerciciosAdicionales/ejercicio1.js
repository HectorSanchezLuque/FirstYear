/* Calculador de tarifas de telefonía móvil:
Todos los usuarios pagan una tarifa base de 10 euros al mes siempre que no hablen más de 180 minutos.
A partir de los 180 minutos y hasta los 240 minutos, se paga a razón de 1 céntimo por minuto en dicha franja.
Si supera los 240 minutos, la cantidad de minutos a partir de dicho límite se paga a razón de 2 céntimos por minuto.

El calculador debe pedir al usuario los minutos hablados y devolver la cantidad de euros a pagar
*/

let readlineSync = require("readline-sync");
let minutos = readlineSync.questionInt("Minutos a tarifar: ");

// Utilizo la variable tarifa para almacenenar la cantidad de euros a pagar
let tarifa = 0;
const tarifaBase = 10;
const limite1=180, limite2=240; //Declaro los límites de los intervalos en constantes
const precioLimite1=0.1, precioLimite2=0.2; //Declaro los precios de límites de los intervalos en constantes

// Compruebo si el dato introducido es negativo
if (minutos<0) {
    console.log("ERROR: La cantidad de minutos no puede ser negativa.")
} else {
    // La cantidad de minutos es positiva
    if (minutos<=limite1) {   // inicialmente limite1 son 180
        tarifa = tarifaBase;
    } else if (minutos<=limite2) {  // inicialmente limite2 son 240
        tarifa = tarifaBase + (minutos - limite1) * precioLimite1;
    } else {
        // los minutos son mayores a limite2 que incialmente son 240
        tarifa = tarifaBase + (limite2 - limite1) * precioLimite1 + (minutos - limite2) * precioLimite2;
    }
    console.log("La tarifa a pagar para ",minutos,"minutos son",tarifa,"euros.");
}
