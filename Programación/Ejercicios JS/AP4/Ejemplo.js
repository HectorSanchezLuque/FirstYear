function cargaArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = 20;
    }
}


let vector = []
for (let j = 0; j < 5; j++) {
    vector[j] = 10;
}
console.log(vector);
cargaArray(vector);
console.log(vector);
