function introduceDatos1(lista) {
    let readlineSync = require("readline-sync");
    
    for (let i = 0; i < 3; i++) {
        lista[i] = readlineSync.question("Marca: ");
    }
}


function introduceDatos2() {
    let a = []; let readlineSync = require("readline-sync");
    for (let i = 0 ; i < 3; i++) {
        a[i] = readlineSync.question("Pais: ");
    }
    return a;
}


let marcas = [];
introduceDatos1(marcas);
console.log(marcas);

let paises = [];
paises = introduceDatos2();
console.log(paises);