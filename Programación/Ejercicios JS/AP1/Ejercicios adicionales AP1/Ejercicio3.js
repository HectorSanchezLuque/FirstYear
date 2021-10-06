let readlineSync = require('readline-sync');
let gastoAnual;

gastoAnual = readlineSync.questionInt('Cuanto has gastado? ');

if (gastoAnual <= 25.34) {
    console.log("Eres un cliente estandar");
} else if (gastoAnual > 25.34 && gastoAnual <= 57.16) {
    console.log("Eres un cliente bronce");
} else if (gastoAnual > 57.16 && gastoAnual <= 68.04) {
    console.log("Eres un cliente plata");
} else if (gastoAnual > 68.04) {
    console.log("Eres un cliente oro");
}

