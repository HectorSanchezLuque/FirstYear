/* Programa que dado un año (expresado en formato numérico entero) indique si es bisiesto o no.
Tan solo los múltiplos de 4 son años bisiestos, pero no todos ellos. Los años múltiplos de 100 no son bisiestos, 
pero sí lo son si son multiplos de 400. El resto de múltiplos de 4 son bisiestos. 
*/

let readlineSync = require("readline-sync");
let anyo = readlineSync.questionInt("Introduce el valor del anyo: ");

// Variable que almacenará un valor booleano indicando si es bisiesto o no
let esBisiesto;

esBisiesto = (anyo % 4 == 0 && anyo % 100 != 0 || anyo % 400 == 0) 

if (esBisiesto) {
    console.log("El año",anyo,"ES bisiesto");
} else {
    console.log("El año",anyo,"NO ES bisiesto");
}


