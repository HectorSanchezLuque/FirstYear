/*
EJERCICIO 13. Programa que lea tres números enteros H, M, S 
que contienen hora, minutos y segundos respectivamente, 
y comprueba si la hora que indican es una hora válida. 
Será válida en caso que la hora esté entre o..24 y los minutos y segundos entre 0..59. 
*/


let horaValida = true;
let mensajeError = '';

let readlineSync = require('readline-sync');
let horas = readlineSync.question('Introduce las horas: ');
let minutos = readlineSync.question('Introduce los minutos: ');
let segundos = readlineSync.question('Introduce los segundos: ');

if (horas<0 || horas >=24) {
    mensajeError = 'Las horas no son validas. ';
    horaValida = false;
}
if (minutos<0 || minutos>59) {
    mensajeError += 'Los minutos no son validos. ';
    horaValida = false;
}
if (segundos<0 || segundos>59) {
    mensajeError += 'Los segundos no son validos. ';
    horaValida = false;
}
if (horaValida == false)
    console.log(mensajeError);
else {   
    console.log('La hora completa introducida es valida:');
    console.log(horas,":",minutos,":",segundos);
}

    