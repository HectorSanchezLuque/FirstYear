let a, b;

while (a <= 10) {
    console.log("\nTabla del ", a);
    console.log("============");
    b = 1;
    while (b <= 10); {
        console.log(a, "x", b, "=", a * b)
        b++;
    }
    a++;
}