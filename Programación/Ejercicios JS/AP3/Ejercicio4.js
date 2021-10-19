function numRomano(numero) {
    switch (numero) {
        case 1:
        console.log(numero, "en numeros romanos es I");
        break;

        case 2:
        console.log(numero, "en numeros romanos es II");
        break;

        case 3:
        console.log(numero, "en numeros romanos es III");
        break;

        case 4:
        console.log(numero, "en numeros romanos es IV");
        break;

        case 5:
        console.log(numero, "en numeros romanos es V");
        break;

        case 6:
        console.log(numero, "en numeros romanos es VI");
        break;

        case 7:
        console.log(numero, "en numeros romanos es VII");
        break;

        case 8:
        console.log(numero, "en numeros romanos es VIII");
        break;

        case 9:
        console.log(numero, "en numeros romanos es IX");
        break;

        case 10:
        console.log(numero, "en numeros romanos es X");
        break;

    }
    

}

let readlineSync, numero;
readlineSync = require("readline-sync");

numero = readlineSync.questionInt("Dime un numero ");

if (numero <= 10) {
    numRomano(numero);
} else {
    console.log("El numero introducido no es valido");
}
