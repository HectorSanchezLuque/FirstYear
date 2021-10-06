/*
Programa que categoriza a clientes acorde a su gasto anual.
Los clientes ESTANDAR son los que gastan menos de 25.34 euros al año.
Los clientes BRONCE son los que gastan más de 25.34 euros pero menos de 57.16 euros al año.
Los clientes PLATA son los que gastan más de 57.16 euros pero menos de 68.04 euros al año.
Los clientes ORO son los que gastan más de 68.04 euros al año.
El programa debe recibir como dato el gasto del cliente e informar sobre el tipo de cliente que es.
*/

let readlineSync = require("readline-sync");
let cantidadGasto = readlineSync.questionFloat("Gasto del cliente (en euros): ");
let tipoCliente="";

if (cantidadGasto<0) {
    console.log("La cantidad de gasto no puede ser negativa");
} else if (cantidadGasto<25.34) {
        tipoCliente = "ESTANDAR";
    } else if (cantidadGasto<57.16) {
            tipoCliente = "BRONCE";
        } else if (cantidadGasto<68.04) {
                tipoCliente ="PLATA";
            } else {
                tipoCliente = "ORO";
}
console.log("Acorde al gasto de",cantidadGasto,"euros, eres un cliente de tipo",tipoCliente);
