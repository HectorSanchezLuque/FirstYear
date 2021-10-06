let readlinesync = require ('readline-sync');
let nota = readlinesync.questionInt("¿Que nota tienes? ")
if (nota>=0 && nota<=10) {
} else {
    console.log("Nota incorrecta");
}   
if (nota>=4.5 && nota<=4.8) {
    console.log("So close yet so far away");
}
if (nota>=4.5 && nota<=4.9) {
    console.log(Math.ceil(nota))
} else if (nota<=4.4) {
    console.log("Has suspendido");
}
if (nota>= 4.9 && nota<=10) {
    console.log("Has aprobado")
}