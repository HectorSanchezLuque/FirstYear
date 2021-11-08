function menorMayor (arr1,arr2) {
    minus = 11;
    j = 0;
    for (a = 0; a <10; a++) {
        if (Math.min(...arr1) < minus) {
            
            minus = Math.min(...arr1);

            arr1.splice(arr1.indexOf(minus),1);

            arr2[j] = minus;

            j++

            minus = 11;
        }
    }
    return arr2;
}



let u = new Array (10);
let v = new Array ();

for (let a = 0; a <10; a++) {
    u[a] = Math.trunc(Math.random()* 10)
}
console.log(u)

v = menorMayor(u,v);

console.log(v);