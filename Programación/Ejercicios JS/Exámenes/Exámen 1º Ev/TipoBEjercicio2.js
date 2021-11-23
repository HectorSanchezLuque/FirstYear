/**
 * Función para generar 6 números entre 1 y 49 de manera aleatoria
 * @returns Devuelve un array con los 6 números generados
 */

function creaCombinacion() {

    array = new Array();

    for (let i = 0; i < 6; i++) {
        array[i] = Math.trunc(Math.random() * 49 + 1);
    }
    return array;
}

/**
 * Función que pregunta 6 números y válida si están entre 1 y 49; si se encuentran en dicha orquilla, los introduce en un array
 * @returns Devuelve un array con los 6 números validados
 */

function preguntarNumeros() {

    array = new Array();

    for (let i = 0; i < 6; i++) {
        pregunta = readlineSync.questionInt("Dime un numero ");

        if (pregunta > 49 || pregunta < 0) {
            i--;

        } else {
            array[i] = pregunta;
        }
    }
    return array;
}

/**
 * Función que recibe dos arrays y comprueba si el array introducido por teclado tiene algún número en común con el generado aleatoriamente. En caso de que haya alguno repetido, lo acumulará en una variable llamada aciertos
 * @param {Array<number>} arrayLoto array que contiene los números generados aleatoriamente
 * @param {Array<number>} arrayNums array que contiene los números introducidos por el usuario
 * @returns Devuelve el número de aciertos que ha tenido el usuario
 */

function validarAciertos(arrayLoto, arrayNums) {

    aciertos = 0;

    for (let i = 0; i < arrayLoto.length; i++) {

        if (arrayLoto.includes(arrayNums[i]) == true) {
            aciertos = aciertos + 1;
        }
    }
    return aciertos;
}

let arrayLoteria = new Array();
let arrayNumerosPedidos = new Array();
let readlineSync = require("readline-sync");
let aciertosRealizados;

arrayLoteria = creaCombinacion();

arrayNumerosPedidos = preguntarNumeros();

aciertosRealizados = validarAciertos(arrayLoteria, arrayNumerosPedidos);

console.log("==========================================================================");

console.log("La combinacion de loteria era:", arrayLoteria.toString());

console.log("==========================================================================");

console.log("Los numeros introducidos por el usuario han sido:", arrayNumerosPedidos.toString());

console.log("Has acertado:", aciertosRealizados, "numero(s)!, lo que significa que hay", 6 - aciertosRealizados, "numeros que no estan en la combinacion");

if (aciertosRealizados >= 3) {
    console.log("ENHORABUENA!! TE CORRESPONDE UN PREMIO!!");
} else {
    console.log("NO TE CORRESPONDE NINGUN PREMIO");
}
