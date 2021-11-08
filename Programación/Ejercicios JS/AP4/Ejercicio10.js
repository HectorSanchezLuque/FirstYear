function rellenarArray(arr) {
    let j = 0;
    for (let i = 65; i <= 90; i++) {

    arr[j] = String.fromCharCode(i)
    j++
    }
}


let readlineSync = require ("readline-sync");
let pregunta;
let arrayAZ = new Array ();
let arrayDos = new Array ();

rellenarArray(arrayAZ);
let j = 0;
do {
   
    pregunta = readlineSync.questionInt("Dime un indice del array ");
    if (pregunta < 0 || pregunta > 25) {
        console.log("No hay nada asignado a ese indice");
    } else {
        arrayDos[j] = arrayAZ[pregunta]
        j++
    }


} while (pregunta !== -1);

console.log("El nuevo array consta de estos indices ", arrayDos);

