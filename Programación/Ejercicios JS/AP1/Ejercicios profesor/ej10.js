/*
EJERCICIO 10. Programa que permita calcular el número de CDs necesarios 
para hacer una copia de seguridad de la información almacenada en un HD 
cuya capacidad se conoce (deberás pedirla por teclado).
Considera que el disco duro está lleno de información y su capacidad expresada
 en GigaBytes. Un CD virgen tiene 700 Megabytes de capacidad y 
 un Gigabyte es igual a 1.024 megabytes. 
*/

const capacidadCD = 700;
let numCD;
let readlineSync = require('readline-sync');
let capacidadHD = readlineSync.question('Introduce la capacidad del HD (en Gb): ');

if (capacidadHD <= 0) 
    // No se admiten capacidades negativas
    console.log('Capacidad de HD no valida');
else {
    // Calculo la capacidad del HD en Megabytes.
    capacidadHD = capacidadHD * 1024;
    console.log('La capacidad del HD es de ',capacidadHD,' MB.');

    // Calculo los CDs necesarios.
    numCD = capacidadHD / capacidadCD;
    // redondeo al sigiuente entero. Hago uso de Math, su función trunc (parte entera) y le sumo 1.
    numCD = Math.trunc(numCD)+1;  
    console.log('Son necesarios',numCD,'para realizar el Backup');
}