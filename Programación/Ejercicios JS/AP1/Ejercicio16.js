let readlinesync = require("readline-sync");
let a;
a = readlinesync.question("Dime una vocal ");
a = a.toLowerCase()

if (a==="a") {
    console.log("Es la primera vocal")
}
if (a==="e") {
    console.log("Es la segunda vocal")
}
if (a==="i") {
    console.log("Es la tercera vocal")
}
if (a==="o") {
    console.log("Es la cuarta vocal")
}
if (a==="u") {
    console.log("Es la quinta vocal")
}
