function obtenerLetra(numDNI,arr){

    num = numDNI % 23
    letra = arr[num];
    return letra;
}



let arrayLetras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]
let readlineSync = require("readline-sync");
let numeroDNI = readlineSync.questionInt("Dime cuales son los numeros de tu DNI ");
console.log("Dado el numero "+ numeroDNI, "le corresponde la letra "+obtenerLetra(numeroDNI,arrayLetras))

