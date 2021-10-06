let readlinesync = require ("readline-sync");
let car2, car1;

car1 = readlinesync.question("Dime una letra ");
car2 = readlinesync.question("Dime otra letra ");

if (car1>="A" && car1<="Z") {
    console.log("Las letras no son minusculas");

} else if (car2>="A" && car2<="Z") {
    console.log("Las letras no son minusculas");
    
} else {
    console.log("Las letras son minusculas");
}
