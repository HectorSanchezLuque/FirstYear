function coordX(beta, alfa, t) {
    let x;
    x = beta * Math.cos(alfa) * t; // (beta * Math.cos(alfa) * t);
    return x;
}

function coordY(beta, alfa, t) {
    let y, a;
    a = 40 / 2;
    y = ((beta * Math.sin(alfa) * t) - a * (t * t)); // (beta * Math.sin(alfa) *t) - 20 * t * t;
    return y;
}


// hacer un for para ir calculando t

let readlineSync, alfa, beta, ejeX, ejeY, maxY, maxX, tTotal;
tTotal = 0;
ejeY = 100;
maxX = 0;
maxY = 0;

readlineSync = require("readline-sync");

piPartDos = Math.PI / 2;

alfa = readlineSync.questionFloat("Dime el angulo de lanzamiento (ten en cuenta que tiene que estar entre 0 y 1.5708 radianes) ");
if (alfa < 0 || alfa > piPartDos) {
    console.log("El angulo de lanzamiento introducido no es valido");

} else {


    beta = readlineSync.questionFloat("Dime la velocidad a la que se movera el proyectil ");

    console.log("Tabla de lanzamiento para un tiro de incinación: ", alfa, "radianes y velocidad: ", beta, "m/s");
    console.log("Inicio de lanzamiento");
    console.log("==================================");

    console.log("Tiempo", "\tPosicion_X", "\tPosicion_Y");

    for (let t = 0.1; ejeY > 0; t = t + 0.1) {
        tTotal = t;
        ejeX = coordX(beta, alfa, t);
        if (ejeX > maxX) {
            maxX = ejeX;
        }
        ejeY = (coordY(beta, alfa, t));
        if (ejeY > maxY) {
            maxY = ejeY;
        }
        console.log(t.toFixed(2), "\t", ejeX.toFixed(2), "\t", "\t", ejeY.toFixed(2));
    }
    console.log("Fin de Lanzamiento");
    console.log("==================================");
    console.log("Altura maxima: ", maxY.toFixed(2), "m", "---", "Distancia maxima: ", maxX.toFixed(2), "m", "---", "Tiempo Total: ", tTotal.toFixed(2), "segundos");
}
