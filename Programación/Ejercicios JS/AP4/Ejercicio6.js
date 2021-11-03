function calcA3(a1, a2) {
for (let i = 0; i < a2.length; i++) {

    array3[i] = a1[i] * a2[i];
}
return array3;
}




let array1 = new Array(10);
let array2 = new Array(10);
let array3 = new Array(10);
let a = 0;

for (let i = 0; i < array1.length; i++) {
    a = Math.random()
    a = a * 20
    a = Math.trunc(a);
    array1[i] = a
}

for (let i = 0; i < array1.length; i++) {
    a = Math.random()
    a = a * 20
    a = Math.trunc(a);
    array2[i] = a
}

array3 = calcA3(array1, array2);


for (let i = 0; i < array3.length; i++) {

    console.log(array1[i], "*", array2[i], "=", array3[i]);
}

