let arrayDado = [];
let resultado = 0;
let cas = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,]
for (let a = 0; a < 36000; a++) {
    arrayDado[a] = Math.trunc(Math.random()*6+1) + Math.trunc(Math.random()*6+1);
    resultado = arrayDado[a];
    switch (resultado) {
        case 2:
        cas[2]++
        break;

        case 3:
        cas[3]++
        break;

        case 4:
        cas[4]++
        break;

        case 5:
        cas[5]++
        break;

        case 6:
        cas[6]++
        break;

        case 7:
        cas[7]++
        break;

        case 8:
        cas[8]++
        break;

        case 9:
        cas[9]++
        break;

        case 10:
        cas[10]++
        break;

        case 11:
        cas[11]++
        break;

        case 12:
        cas[12]++
        break;
    }
}

console.log("El numero 2 ha salido: "+ cas[2], "veces",",", "un",(cas[2]/36000*100).toFixed(2),"%");
console.log("El numero 3 ha salido: "+ cas[3], "veces",",", "un",(cas[3]/36000*100).toFixed(2),"%");
console.log("El numero 4 ha salido: "+ cas[4], "veces",",", "un",(cas[4]/36000*100).toFixed(2),"%");
console.log("El numero 5 ha salido: "+ cas[5], "veces",",", "un",(cas[5]/36000*100).toFixed(2),"%");
console.log("El numero 6 ha salido: "+ cas[6], "veces",",", "un",(cas[6]/36000*100).toFixed(2),"%");
console.log("El numero 7 ha salido: "+ cas[7], "veces",",", "un",(cas[7]/36000*100).toFixed(2),"%");
console.log("El numero 8 ha salido: "+ cas[8], "veces",",", "un",(cas[8]/36000*100).toFixed(2),"%");
console.log("El numero 9 ha salido: "+ cas[9], "veces",",", "un",(cas[9]/36000*100).toFixed(2),"%");
console.log("El numero 10 ha salido: "+ cas[10], "veces",",", "un",(cas[10]/36000*100).toFixed(2),"%");
console.log("El numero 11 ha salido: "+ cas[11], "veces",",", "un",(cas[11]/36000*100).toFixed(2),"%");
console.log("El numero 12 ha salido: "+ cas[12], "veces",",", "un",(cas[12]/36000*100).toFixed(2),"%");
