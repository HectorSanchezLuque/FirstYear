/**
 * 
 * @function {*} función para mostrar el menú de opciones
 */

function visualizarLista(arr) {
    console.log("LISTA DE ESPERA", "-", "Restaurante Florida's Hollywood");
    console.log("=================================================");
    for (let i = 0; i < arr.length; i++) {
        console.log(" " + arr[i].toString());
    }
}


/**
 * 
 * @function {*} añadir clientes y comprobar que no haya ninguno repetido
 */

function addClient(arr) {

    pregunta = readlineSync.question("Digame el nombre del cliente que desea agregar ");
    pregunta = pregunta.toUpperCase();
    indice = arr.indexOf(pregunta);
    if (indice == -1) {
        arr.push(pregunta);
    }
    if (indice >= 0) {
        console.log("El cliente introducido ya esta en la lista");
    }
    return arr;
}

/**
 * 
 * @function {*} señala qué cliente debe ocupar la siguiente mesa y lo elimina de la lista 
 */

function ocupMesa(arr) {
    console.log(arr[0], "debe ocupar la mesa disponible");
    arr.shift();
}

/**
 * 
 * @function {*} función que elimina a un cliente de la lista de espera
 */

function delClient(arr) {

    pregunta = readlineSync.question("Que cliente desea eliminar? ");
    pregunta = pregunta.toUpperCase();
    indice = arr.indexOf(pregunta);

    if (indice >= 0) {
        arr.splice(indice, 1);
    }
    if (indice == -1) {
        console.log("El cliente introducido no esta en la lista");
    }
    return arr;
}

/**
 * 
 * @function {*} permite al cliente ver su posición en la cola
 */

function turnoCliente(arr) {
    pregunta = readlineSync.question("Indique su nombre ");
    pregunta = pregunta.toUpperCase();

    indice = arr.indexOf(pregunta);

    if (indice >= 0) {
        posicion = arr.indexOf(pregunta);
        console.log("Usted " + "(" + arr[indice] + ")", "esta en la posicion numero", indice + 1);
    } if (indice == -1) {
        console.log("Usted no se encuentra en la lista");
    }
}



let readlineSync = require("readline-sync");
let opcion;
let listaClientes = ["JUAN", "GUSTAVO", "LUIS", "VICTOR"];
let arrayOpciones = new Array(8);
let continuar;

arrayOpciones[0] = "1. Agregar nuevo cliente a la lista.";
arrayOpciones[1] = "2. Siguiente cliente ocupa mesa.";
arrayOpciones[2] = "3. Borrar cliente impaciente.";
arrayOpciones[3] = "4. Ver turno de cliente.";
arrayOpciones[4] = "5. Ver estado de la lista de espera.";
arrayOpciones[5] = "6. Guardar la lista de espera.";
arrayOpciones[6] = "7. Recuperar la lista de espera.";
arrayOpciones[7] = "8. Salir del programa.";


do {
    
    visualizarLista(arrayOpciones);

    opcion = readlineSync.questionInt("Introduce opcion (1..8): ");
    
    if (opcion > 8 || opcion < 0) {
        console.log("Esa funcionalidad no existe");
    }


    switch (opcion) {
        case 1:
            console.log("Ha seleccionado < Agregar un nuevo Cliente >");
            addClient(listaClientes);
            console.log(listaClientes);
            break;

        case 2:
            console.log("Ha seleccionado < Siguiente cliente ocupa mesa >");
            ocupMesa(listaClientes);
            console.log(listaClientes);
            break;

        case 3:
            console.log("Ha seleccionado < Borrar cliente impaciente >");
            delClient(listaClientes);
            console.log(listaClientes);
            break;

        case 4:
            console.log("Ha seleccionado < Ver turno de cliente >");
            turnoCliente(listaClientes);
            break;

        case 5:
            console.log("Ha seleccionado < Ver estado de la lista de espera >");
            console.log(listaClientes);
            break;

        case 6:

        
    }
    continuar = readlineSync.keyInYN("Desea borrar la consola? ");
    if (continuar == true) {
        console.clear();
    }
    
} while (opcion !== 8);