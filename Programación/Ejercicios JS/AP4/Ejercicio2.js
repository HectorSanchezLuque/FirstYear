function llenarArrays(arr) {
    let readlineSync = require("readline-sync")
    for (let i = 0; i < arr.length; i++) {
            arr[i] = readlineSync.questionFloat("Dime un numero ");
    }
    return arr;
}

function mostrarElementos(a) {

    for (let valor of a) {

        console.log("El valor: ", valor, "esta en la posicion: ", a.indexOf(valor));

    }
}

let numeros = new Array (10);

llenarArrays(numeros);
mostrarElementos(numeros);