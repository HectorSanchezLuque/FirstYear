/* Programa que lee una hora en formato de 24 horas y lo convierte a formato de 12 horas */

let readlineSync = require("readline-sync");
let hora = readlineSync.questionInt("Introduce la hora (0..23): ");
let min = readlineSync.questionInt("Introduce los minutos (0..59): ");

// compruebo si los datos introducidos son correctos.
if ((hora>0 && hora<=23) && (min>=0 && min<=59)) {
    // los datos son correctos
    if (hora>=0 && hora<=12) {
        // estamos en zona AM.
        console.log("Hora: ",hora,":",min,"AM");
    } else {
        console.log("Hora: ",hora-12,":",min,"PM");
    }
} else {
    // los datos no son correctos.
    console.log("Los datos suministrados no son correctos");
    console.log("Las horas deben estar entre 0 y 23 --- Los minutos deben estar entre 0 y 59")
}
