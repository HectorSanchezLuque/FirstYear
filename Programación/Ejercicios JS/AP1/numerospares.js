let a = 1;

for (a = 1; a <= 1024; a*=2) {
    if (a % 2 == 0) {
        console.log(a);
    }
}