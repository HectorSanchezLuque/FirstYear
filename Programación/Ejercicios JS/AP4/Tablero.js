let arrayBidimensional = new Array (10);
let matriz = "";

for (let i = 0; i <arrayBidimensional.length; i++) {
    arrayBidimensional[i] = new Array (10);
}

for (let i = 0; i < arrayBidimensional.length; i++) {
    for (let j = 0; j <arrayBidimensional.length; j++) {

    arrayBidimensional [i][j] = "0"
    }

}
for (let i = 0; i < arrayBidimensional.length; i++) {
    console.log(arrayBidimensional[i].toString());
}


// for (let i = 0; i < arrayBidimensional.length; i++) {
//     for (let j = 0; j < arrayBidimensional.length; j++) {
//     matriz = matriz + arrayBidimensional[i][j]
//     }
//     matriz = matriz + "\n";
// }
// console.log(matriz);