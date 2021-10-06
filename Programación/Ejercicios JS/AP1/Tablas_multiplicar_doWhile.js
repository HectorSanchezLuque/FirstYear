let c;
var a = 1;
let b = 1;

do {

    c = a * b;
    b++;
    if (c == a * 1) {
        console.log("La tabla de ", a);
    }
    console.log(c);
    if (c == a * 10) {
        a++;
        b = b - 10;

    }

} while (c < 100)
