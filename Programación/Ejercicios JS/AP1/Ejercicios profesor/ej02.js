/* EJERCICIO 2. Programa que calcule el promedio aritmético 
de las notas obtenidas por un estudiante. 
Las notas corresponden a tres exámenes parciales que 
deberán ser suministradas por teclado */

let promedioNotas;
// Petición de datos por teclado
let readlineSync = require('readline-sync');
let exaP1 = readlineSync.question('Nota primer examen: ');
let exaP2 = readlineSync.question('Nota segundo examen: ');
let exaP3 = readlineSync.question('Nota tercer examen: ');

// Cálculo del promedio. Convierto las variables a número ya que JS 
// toma sus valores como strings y los concatena. Problemas de un 
// lenguaje débilmente tipado...
// Si utilizamos el método questionInt de la librería readline-sync
// no es necesario realizar la transformación de tipos.
 
promedioNotas = ( Number(exaP1) + Number(exaP2) + Number(exaP3) )/3;

// visualización de resultados
console.log('La nota promedio es: ' + promedioNotas);

