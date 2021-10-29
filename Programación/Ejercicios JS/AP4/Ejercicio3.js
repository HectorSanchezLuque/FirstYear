function llenarArrays(arr) {
    let readlineSync = require("readline-sync")
    for (let i = 0; i < arr.length; i++) {
            arr[i] = readlineSync.questionFloat("Dime un numero ");
    }
    return arr;
}


function pares(arr) {
    let par = 0;
    let impar = 0;
    for (let i = 0;i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            par++
        } else {
            impar++
        }
    }
    return par;
}




let numeros = new Array (10);
let total= 0
llenarArrays(numeros);
total = pares(numeros);
console.log("El total de numeros pares es: ", total, "el total de numeros impares es: ", numeros.length - total);