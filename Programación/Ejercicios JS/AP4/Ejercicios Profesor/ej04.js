/* 
EJERCICIO 4. El orden de clasificación de un concurso es el siguiente:
    1º. Ana. - 2º Oswaldo – 3º. Raúl – 4º. Celia - 5º. María – 6º. Antonio

Realiza un programa que:
    1) Almacene dicha clasificación en un array e imprima la clasificación inicial.
    2) Se supone que el concurso continúa y se van modificando las posiciones anteriores, de tal forma que debemos de cambiar el estado del array atendiendo a las siguientes situaciones:
        •	Celia adelanta a Raúl.
        •	Antonio es descalificado y se elimina del concurso.
        •	Detrás de Ana y antes de Oswaldo se clasifican dos nuevos concursantes: Roberto y Amaya, en ese orden.
        •	Hay una nueva participante que pasa a encabezar la clasificación: Marta.
    3) Finaliza el programa visualizando la clasificación actualizada y comprueba que se ha hecho correctamente los cambios indicados en el punto 2.
*/


//almaceno la clasificación inicial en un Array
let clasificacion = ['Ana','Oswaldo','Raul','Celia','Maria','Antonio'];
// Visualizo la clasificación
for(i=0;i<clasificacion.length;i++) {
    console.log('Posicion ' + (i+1) + ': ' + clasificacion[i]);
}
// Celia adelanta a Raul (intercambio los elementos en sus posiciones)
clasificacion[2] = 'Celia';
clasificacion[3] = 'Raul';
console.log(clasificacion);  // visualizo el array en bruto para ver los cambios  
// Antonio es descalificado y se elimina del concurso.
clasificacion.pop();
// clasificacion.splice(clasificacion.indexOf("Antonio"),1) // --> en caso que no fuese el último elemento
console.log(clasificacion);  // visualizo el array en bruto para ver los cambios  
// Detrás de Ana y antes de Oswaldo se clasifican dos nuevos concursantes: Roberto y Amaya, en ese orden.
clasificacion.splice(1,0,'Roberto','Amaya');
console.log(clasificacion); // visualizo el array en bruto para ver los cambios  
// Hay una nueva participante que pasa a encabezar la clasificación: Marta.
clasificacion.unshift('Marta');
console.log(clasificacion); // visualizo el array en bruto para ver los cambios  
