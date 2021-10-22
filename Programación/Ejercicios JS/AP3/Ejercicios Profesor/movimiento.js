/* Construye un programa en JavaScript que, utilizando un menú de opciones, permita simular el movimiento de un objeto
dentro de un tablero virtual y actualice su posición dentro del mismo cada vez que se produzca un movimiento.
El tablero tendrá un tamaño de 10x10 (filas x columnas). Los movimientos posibles son ARRIBA, ABAJO, IZQUIERDA, DERECHA. 
Tras cada movimiento permitido el programa mostrará la nueva posición del objeto (las nuevas coordenadas X e Y dentro
del tablero). Las coordenadas o posición inicial serán (5,5) y en todo momento en movimiento sobre el tablero deberá 
realizarse sobre coordenadas positivas (mayores a cero). En caso de llegar a situarse en posiciones cero (para X o Y),
se deberá mantener la posición en 1. De la misma manera, si se intenta exceder el movimiento fuera del tablero 
(fila o columna 11) el objeto se deberá mantener en la posición 10 de la fila o columna sin permitir el movimiento) */

let readlineSync = require("readline-sync");
let tecla;
let posX = 5, posY=5;
let limiteSuperior = 10; // Límite superior del tablero (filas y columnas)
let limiteInferior = 1;  // Límite inferior del tablero (filas y columnas)

do {
    console.clear();  // realizo un borrado/limpieza de la terminal con el método clear.
    console.log("Movimientos permitidos");
    console.log("======================");
    console.log("1. Arriba.");
    console.log("2. Abajo.");
    console.log("3. Izquierda.");
    console.log("4. Derecha.");
    console.log("5. Salir / Acabar.");
    tecla = readlineSync.questionInt("Introduce opcion (1..5): "); 

    switch(tecla) {
        case 1: // movimiento arriba.
            if (posY<limiteSuperior) {
                posY++;    
            }
            break;
        case 2: // movimiento abajo.
            if (posY>limiteInferior) {
                posY--;    
            }
            break;
        case 3: // movimiento izquierda.
            if (posX>limiteInferior) {
                posX--;    
            }
            break;
        case 4: // movimiento derecha.
            if (posX<limiteSuperior) {
                posX++;    
            }
            break;
        case 5: // Salida de programa.
            console.log("Fin de programa");
            pausa = readlineSync.keyInPause("Pulsa para finalizar");
            break;
        default: // En caso que la tecla pulsada no esté entre 1 y 5.
            console.log("Opción incorrecta");
            pausa = readlineSync.keyInPause("Pulsa para continuar");
            break;
    }
    
    // muestro la posición en el tablero 
    // Salvo en el caso que la tecla pulsada sea 5 (Salir de programa)
    if(tecla!=5) {
         console.log("Coord.X = ",posX," -- Coord.Y = ",posY);
         pausa = readlineSync.keyInPause("Pulsa para continuar");
    }

} while (tecla !=5);