let arrayBidimensional = new Array (5);
let matriz = "";

for (let i = 0; i <arrayBidimensional.length; i++) {
    arrayBidimensional[i] = new Array (5);
}

for (let i = 0; i < arrayBidimensional.length; i++) {
    for (let j = 0; j <arrayBidimensional.length; j++) {

    arrayBidimensional [i][j] = "0"
    }

}
console.log(arrayBidimensional);

// for (let i = 0; i < arrayBidimensional.length; i++) {
//     for (let j = 0; j < arrayBidimensional.length; j++) {
//     matriz = matriz + arrayBidimensional[i][j]
//     }
//     matriz = matriz + "\n";
// }
// console.log(matriz);