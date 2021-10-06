var nota = 42;
var tiponota = "";


if (nota < 0 || nota > 10) {
    console.log("La nota no es válida");
} else {

    if (nota < 5) tiponota = "insuficiente";
    if (nota >= 5 && nota < 6) tiponota = "suficiente";
    if (nota >= 6 && nota < 7) tiponota = "bien";
    if (nota >= 7 && nota < 9) tiponota = "notable";
    if (nota >= 9) tiponota = "sobresaliente";
    console.log(tiponota)
}
