// a = 3; b = -5; c = 1;
let a, b, c;
let x1, x2;
a = 3;
b = -5;
c = 1;

x1 = (-b + Math.sqrt(b**2-4*a*c))/(2*a);
x2 = (-b - Math.sqrt(b**2-4*a*c))/(2*a);
console.log("x1 :", x1);
console.log("x2 :", x2);
