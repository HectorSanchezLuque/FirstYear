let readlineSync = require("readline-sync");
let a, b;

for (a = 1; a <= 10; a++) {

    console.log("\nTabla del ", a);
    console.log("============");

    for (b = 1; b <= 10; b++) {
        console.log(a, "x", b, "=", a * b)

    }

    readlineSync.keyInPause();

}