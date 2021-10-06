/*
EJERCICIO 14. Programa que, tras pedir la medida de los tres lados de un triángulo
identifique qué tipo es (escaleno, equilátero o isósceles). 
Averigua cual es la característica de cada uno de ellos 
que te puede ayudar a identificarlos y pensar la lógica de programación a emplear.  
*/

/* CLAVES PARA LA LÓGICA DE PROGRAMACIÓN
Un triángulo ESCALENO tiene los tres lados diferentes.
Un triángulo EQUILÁTERO tiene los tres lados diferentes.
Un triángulo ISÓSCELES tiene dos lados iguales y uno diferente.
*/

let readlineSync = require('readline-sync');
let lado1 = readlineSync.question('Medida de 1er lado: ');
let lado2 = readlineSync.question('Medida de 2do lado: ');
let lado3 = readlineSync.question('Medida de 3er lado: ');

if (lado1 == lado2 && lado2 == lado3)
    console.log('El triangulo es EQUILATERO (tres lados iguales)');
else if (lado1 == lado2 || lado1 == lado3 || lado2==lado3)
        console.log('El triangulo es ISÓSCELES (dos lados iguales y uno diferente)');
    else
        console.log('El triangulo es ESCALENO (los tres lados diferentes)');
    