let readlineSync = require("readline-sync");
let pregunta;
let piramide = new Array(pregunta);
let piramide2ElRetornoDeLaPiramide = new Array()
piramide2ElRetornoDeLaPiramide[0] = "";


pregunta = readlineSync.questionInt("Cuan grande deseas que sea? ");


for (let i = 0; i < pregunta; i++) {
    piramide[i] = "x";

}
for (let i = pregunta; i > 1; i--) {
    piramide2ElRetornoDeLaPiramide[i] = "x";
}

for (let i = 0; i<pregunta; i++) {
    console.log(piramide[i]+ piramide.reverse(i))
}