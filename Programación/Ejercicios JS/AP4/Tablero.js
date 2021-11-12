let arrayBidimensional = new Array(10);
let readlineSync = require("readline-sync");
let ficha = "x"

for (let i = 0; i < arrayBidimensional.length; i++) {
    arrayBidimensional[i] = new Array(10);
}

for (let i = 0; i < arrayBidimensional.length; i++) {
    for (let j = 0; j < arrayBidimensional.length; j++) {

        arrayBidimensional[i][j] = "0"
    }

}

posicionX = 5;
posicionY = 5;
arrayBidimensional[posicionY][posicionX] = "x";







do {

    for (let i = 0; i < arrayBidimensional.length; i++) {
        console.log(arrayBidimensional[i].toString());
    }

    movement = readlineSync.question("Hacia que direccion deseas moverte? ");

// posicionY = 0; solo se puede mover a la izq, der y abj.
// posicionY = 9; solo se puede mover a la izq, der y arr
// posicionX = 0; solo se puede mover a la der, arr y abj
// posicionX = 9; solo se puede mover a la izq, arr y abj;
// posicionY = 0 && posicionX = 0; solo se puede mover abj y der;
// posicionY = 9 && posicionX = 9; solo se puede mover arr y der;
// posicionY = 0 && posicionX = 9; solo se puede mover abj y izq;
// posicionY = 9 && posicionX = 0; solo se puede mover arr y izq;

    switch (movement) {
        case "a":
            if (posicionX == 0 || posicionY == 0 && posicionX == 0 || posicionY == 9 && posicionX == 0) {
                console.log("No puedo moverme hacia esa direccion");
            } else {
                posicionX = posicionX - 1;
                arrayBidimensional[posicionY][posicionX] = "x";
                arrayBidimensional[posicionY][posicionX + 1] = "0"
            }
            break;

        case "d":
            if (posicionX == 9 || posicionY == 0 && posicionX == 9 || posicionY == 9 && posicionX == 9) {
                console.log("No puedo moverme hacia esa direccion");
            } else {
                posicionX = posicionX + 1;
                arrayBidimensional[posicionY][posicionX] = "x";
                arrayBidimensional[posicionY][posicionX - 1] = "0"
            }
            break;

        case "w":
            if (posicionY == 0 || posicionX == 9 && posicionY == 0 || posicionY == 0) {
                console.log("No puedo moverme hacia esa direccion");

            } else {
                
                posicionY = posicionY - 1;
                arrayBidimensional[posicionY][posicionX] = "x";
                arrayBidimensional[posicionY + 1][posicionX] = "0"
            }
            break;

        case "s":
            if (posicionY == 9 || posicionX == 9 && posicionY == 9 || posicionX == 0 && posicionY == 9) {
                console.log("No puedo moverme en esa direccion");

            } else {
                posicionY = posicionY + 1;
                arrayBidimensional[posicionY][posicionX] = "x";
                arrayBidimensional[posicionY - 1][posicionX] = "0"
                
            }
            break;


    }


} while (movement != "q");