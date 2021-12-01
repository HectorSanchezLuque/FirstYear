class Coche {
    constructor(movimiento, combustible) {
        this.movimiento = movimiento;
        this.combustible = combustible;
        this.enMarcha = false;
    }
}



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
arrayBidimensional[posicionY][posicionX] = ficha;
this.combustible = 10;
this.movimiento = 1;



let ready = readlineSync.keyInYN("R u rdy? ");
if (ready == true) {

do {

    for (let i = 0; i < arrayBidimensional.length; i++) {
        console.log(arrayBidimensional[i].toString());
    }

    movement = readlineSync.question("Hacia que direccion deseas moverte? ");


    switch (movement) {
        case "a":
            if (posicionX == 0 || posicionY == 0 && posicionX == 0 || posicionY == 9 && posicionX == 0) {
                console.log("No puedo moverme hacia esa direccion");
            } else {
                posicionX = posicionX - this.movimiento;
                arrayBidimensional[posicionY][posicionX] = ficha;
                arrayBidimensional[posicionY][posicionX + this.movimiento] = "0";
                this.combustible -= 1;
            }
            break;

        case "d":
            if (posicionX == 9 || posicionY == 0 && posicionX == 9 || posicionY == 9 && posicionX == 9) {
                console.log("No puedo moverme hacia esa direccion");
            } else {
                posicionX = posicionX + this.movimiento;
                arrayBidimensional[posicionY][posicionX] = ficha;
                arrayBidimensional[posicionY][posicionX - this.movimiento] = "0";
                this.combustible -= 1;
                console.log(this.combustible)
            }
            break;

        case "w":
            if (posicionY == 0 || posicionX == 9 && posicionY == 0 || posicionY == 0) {
                console.log("No puedo moverme hacia esa direccion");

            } else {
                
                posicionY = posicionY - this.movimiento;
                arrayBidimensional[posicionY][posicionX] = ficha;
                arrayBidimensional[posicionY + this.movimiento][posicionX] = "0";
                this.combustible -= 1;
            }
            break;

        case "s":
            if (posicionY == 9 || posicionX == 9 && posicionY == 9 || posicionX == 0 && posicionY == 9) {
                console.log("No puedo moverme en esa direccion");

            } else {
                posicionY = posicionY + this.movimiento;
                arrayBidimensional[posicionY][posicionX] = ficha;
                arrayBidimensional[posicionY - this.movimiento][posicionX] = "0"
                this.combustible -= 1;
                
            }
            break; 

    }


} while (movement != "q" || this.combustible != 0);

} else {
    console.log("Pues no jugamos");
}