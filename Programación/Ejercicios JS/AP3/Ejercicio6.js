function sumaSucesiva (a,b) {
    let total = 0;
    for (let c = 1; c <= b; c++) {
        total = total + a;
    }
    return total;


}



let readlineSync, total = 0, numero1 = 0, numero2 = 0, a = 1;

readlineSync = require("readline-sync");


a = readlineSync.questionInt("Dime un numero ");
b = readlineSync.questionInt("Dime otro numero ");

console.log(sumaSucesiva(a,b));