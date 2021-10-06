let readLineSync = require("readline-sync");
let a, b, redondear;
let calculadora = readLineSync.question("Que quieres hacer? ");
calculadora = calculadora.toLowerCase();

switch (calculadora) {
    case "restar":
        a = readLineSync.questionInt("Dime el primer numero "); b = readLineSync.questionInt("Dime el segundo numero ");
        redondear = readLineSync.keyInYN("Quieres redondear el numero? ");
        if (redondear === true) {
            console.log(Math.trunc(a - b));
        } else {
            console.log(a - b);
        }
        break;

    case "sumar":
        a = readLineSync.questionInt("Dime el primer numero "); b = readLineSync.questionInt("Dime el segundo numero ");
        redondear = readLineSync.keyInYN("Quieres redondear el numero? ");
        if (redondear === true) {
            console.log(Math.trunc(a + b));
        } else {
            console.log(a + b);
        }
        break;

    case "multiplicar":
        a = readLineSync.questionInt("Dime el primer numero "); b = readLineSync.questionInt("Dime el segundo numero ");
        redondear = readLineSync.keyInYN("Quieres redondear el numero? ");
        if (redondear === true) {
            console.log(Math.trunc(a * b));
        } else {
            console.log(a * b);
        }
        break;

    case "dividir":
        a = readLineSync.questionInt("Dime el primer numero "); b = readLineSync.questionInt("Dime el segundo numero ");
        redondear = readLineSync.keyInYN("Quieres redondear el numero? ");
        if (redondear === true) {
            console.log(Math.trunc(a / b));
        } else {
            console.log(a / b);
        }
        break;

    case "raiz cuadrada":
        a = readLineSync.questionInt("Dime un numero ");
        redondear = readLineSync.keyInYN("Quieres redondear el numero? ");
        if (redondear === true) {
            console.log(Math.trunc(Math.sqrt(a)));
        } else {
            console.log(Math.sqrt(a));
        }
        break;

    case "porcentaje":
        a = readLineSync.questionInt("Dime que porcentaje quieres calcular "); b = readLineSync.questionInt("Dime de que numero quieres que calcule el procentaje ");
        a = a / 100;
        redondear = readLineSync.keyInYN("Quieres redondear el numero? ");
        if (redondear === true) {
            console.log(Math.trunc(a * b));
        } else {
            console.log(a * b);
        }
        break;

    case "exponente":
        a = readLineSync.questionInt("Dime un numero ");
        console.log(Math.pow(a, 2));
        break;

    case "aleatorio":
        console.log(Math.random());
        break;

    default:
        console.log("Error 404:", calculadora, "not found");

}