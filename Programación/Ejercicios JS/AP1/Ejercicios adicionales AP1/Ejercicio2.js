let readlineSync = require('readline-sync');
let year = readlineSync.questionInt('Que año es? ');
let bisiesto;

bisiesto = year % 4 == 0 && year % 100 != 0 || year % 400 == 0
if (bisiesto) {
    console.log("Es un año bisiesto")
} else {
    console.log("No es un año bisiesto");
}