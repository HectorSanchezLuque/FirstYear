let a, b, c, d, e, n, readlineSync, anyo, mes;

readlineSync = require("readline-sync")

anyo = readlineSync.questionInt("Que año deseas comprobar? ");

a = anyo % 19;
b = anyo % 4;
c = anyo % 7;
d = (19 * a + 24) % 30;
e = (2 * b + 4 * c + 6 * d + 5) % 7;
n = 22 + d + e;

if (n <= 31) {
    mes = "Marzo";
}
if (n >= 32 && n <= 61) {
    mes = "Abril";
    n = n - 31
    if (n == 0) {
        n = 1
    }
}
console.log("El domingo de pascua cae el ", n, "de ", mes);