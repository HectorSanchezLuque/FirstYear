let readlineSync = require('readline-sync');
let password, confirmador, trys;
confirmador = false;
const passCorrecta = "ALDEBARAN";
trys = 0;
do {
    password = readlineSync.question("Introduce la contraseña ");
    trys++
    if (password == passCorrecta) {
        confirmador = true

    } 
} while (trys < 5 && confirmador == false);

if (confirmador == true) {
    console.log("La contraseña es correcta");

} else if (trys == 5) {
    console.log("Te has quedado sin intentos, fiera");
}

