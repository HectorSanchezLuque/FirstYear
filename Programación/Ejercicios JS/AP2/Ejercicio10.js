let numerito, a;

numerito = 0;
a = 1;

for (a=1; a <=6; a++) {
    numerito = Math.random();
    numerito = numerito * 49;
    numerito = Math.trunc(numerito) + 1;

    console.log("Numero", a, ": ", numerito)
}