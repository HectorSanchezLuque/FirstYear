let readlineSync = require ("readline-sync");
let a, b, c;

a = [];
c = 0
for (let i = 0; i < 5; i++) {
    b = readlineSync.questionFloat("Dime un numero ");
    a[i] = b;
    c = c + a[i];
}
console.log(c/a.length);