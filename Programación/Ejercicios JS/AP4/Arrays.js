let readlineSync = require("readline-sync");    
let flores = [];

for (let i = 0; i < 3; i++) {
    flores[i] = readlineSync.question("Dame el nombre de la flor " + (i+1) +": ");
    console.log(flores[i]);
}


