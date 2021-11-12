//Funciones

/**
 * Función para mostrar el menú de opciones
 * @param {Array.<string>} arr Array conteniente de la lista de clientes
 * @returns {Array.<string>} Devuelve el menú
 */


function visualizarLista(arr) {

    console.log("LISTA DE ESPERA", "-", "Restaurante Florida's Hollywood");

    arr[0] = "================================================="
    arr[1] = "1. Agregar nuevo cliente a la lista.";
    arr[2] = "2. Siguiente cliente ocupa mesa.";
    arr[3] = "3. Borrar cliente impaciente.";
    arr[4] = "4. Ver turno de cliente.";
    arr[5] = "5. Ver estado de la lista de espera.";
    arr[6] = "6. Guardar la lista de espera.";
    arr[7] = "7. Recuperar la lista de espera.";
    arr[8] = "8. Salir del programa.";

    console.log(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        console.log(" " + arr[i]);
    }
    return arr;
}


/**
 *  Función que añade clientes y comprueba que no haya ninguno repetido
 * @param {Array.<string>} arr Array que contiene la lista de clientes
 * @returns {Array.<string>} Devuelve el array actualizado con un cliente más en caso de que no esté repetido
 */

function addClient(arr) {

    pregunta = readlineSync.question("Digame el nombre del cliente que desea agregar ");
    pregunta = pregunta.toUpperCase();

    indice = arr.indexOf(pregunta);

    if (indice == -1) {
        arr.push(pregunta);
        console.log("El cliente ha sido añadido a la lista");
    }
    if (indice >= 0) {
        console.log("El cliente introducido ya esta en la lista");
    }
    return arr;
}

/**
 * Señala qué cliente debe ocupar la siguiente mesa y lo elimina de la lista 
 * @param {Array.<string>} arr Array que contiene la lista de clientes
 */

function ocupMesa(arr) {

    if (arr.length == 0) {
        console.log("Actualmente no hay clientes en la lista");

    } else {
        console.log(arr[0], "debe ocupar la mesa disponible");

        arr.shift();
    }
}

/**
 * Función que elimina a un cliente de la lista de espera
 * @param {Array.<string>} arr Array que contiene la lista de clientes
 * @returns Devuelve el array actualizado con un cliente menos en caso de que el nombre introducido pertenezca a la lista
 */

function delClient(arr) {

    if (arr.length == 0) {
        console.log("Actualmente no hay clientes en la lista");

    } else {

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
}

/**
 * Permite al cliente ver su posición en la cola
 * @param {Array.<string>} arr Array que contiene la lista de clientes
 */

function turnoCliente(arr) {

    if (arr.length == 0) {
        console.log("Actualmente no hay clientes en la lista");

    } else {

        pregunta = readlineSync.question("Indique su nombre ");
        pregunta = pregunta.toUpperCase();

        indice = arr.indexOf(pregunta);

        if (indice >= 0) {

            console.log("Usted " + "(" + arr[indice] + ")", "esta en la posicion numero", indice + 1);

        } if (indice == -1) {
            console.log("Usted no se encuentra en la lista");
        }
    }
}

/**
 * Función para mostrar la lista y qué, si no hay, avise de que está vacía
 * @param {Array.<string>} arr Array que contiene la lista de clientes
 */

function verListaActual(arr) {

    if (arr.length == 0 || arr[0] == "") {
        console.log("Actualmente no hay clientes en la lista");

    } else {
        console.log(arr);
    }
}

/**
 * Función para guardar los indices del array seleccionado en un archivo .txt
 * @param {Array.<string>} arr Array que contiene la lista de clientes
 */

function guardarLista(arr) {
    let pregunta;

    if (arr.length == 0 || listaClientes[0] == "") {

        pregunta = readlineSync.keyInYN("La lista esta vacia, desea guardarla de todas formas? ");

        if (pregunta == true) {

            file = fs.openSync("listado.txt", "w");
            fs.writeSync(file, arr.toString(), undefined, "utf-8");
            fs.closeSync(file);

            console.log("Su lista ha sido guardada");

        } else {
            console.log("No se ha guardado la lista");
        }
    } else {

        file = fs.openSync("listado.txt", "w");

        fs.writeSync(file, arr.toString(), undefined, "utf-8");
        fs.closeSync(file);

        console.log("Su lista ha sido guardada");

    }
}


/**
 * Función para recuperar la lista anteriormente guardada en un documento de texto y asignar dichos datos a un array
 * @param {Array.<string>} arr Array que contiene la lista de clientes
 * @returns Devuelve el Array con los datos del documento de texto
 */

function recuperarLista(arr) {

    if (!fs.existsSync("listado.txt")) {

        console.log("El archivo no existe");

        pregunta = readlineSync.keyInYN("Desea crear el archivo? ");

        if (pregunta == true) {

            file = fs.openSync("listado.txt", "w");

            fs.closeSync(file);
        }

    } else {

        file = fs.openSync("listado.txt", "r");

        lines = fs.readFileSync(file, "utf-8");

        if (lines == "") {

            console.log("El archivo esta vacio");

            pregunta = readlineSync.keyInYN("Desea cargarlo de todos modos? ")

            if (pregunta == true) {

                console.log("Su lista ha sido recuperada");

                arr = lines.split(",");

            } else {

                console.log("La lista no se ha cargado");

            }

        } else {
           
            console.log("Su lista ha sido recuperada");

            arr = lines.split(",");
        }
        
        fs.closeSync(file);
    }
    return arr;
}

//Programa principal

let readlineSync = require("readline-sync");
const fs = require("fs");
let opcion, bConsola;
let listaClientes = new Array();
let arrayOpciones = new Array();


do {

    visualizarLista(arrayOpciones);

    opcion = readlineSync.questionInt("Introduce opcion (1..8): ");

    if (opcion > 8 || opcion <= 0) {
        console.log("No hay ninguna funcionalidad asignada a ese numero");
    }

    switch (opcion) {

        case 1:

            console.log("Ha seleccionado < Agregar un nuevo Cliente >");

            addClient(listaClientes);
            break;

        case 2:

            console.log("Ha seleccionado < Siguiente cliente ocupa mesa >");

            ocupMesa(listaClientes);
            break;

        case 3:

            console.log("Ha seleccionado < Borrar cliente impaciente >");

            delClient(listaClientes);
            break;

        case 4:

            console.log("Ha seleccionado < Ver turno de cliente >");

            turnoCliente(listaClientes);
            break;

        case 5:

            console.log("Ha seleccionado < Ver estado de la lista de espera >");

            verListaActual(listaClientes);
            break;

        case 6:

            console.log("Ha seleccionado < Guardar la lista de espera >");

            guardarLista(listaClientes);
            break;

        case 7:

            console.log("Ha seleccionado < Recuperar la lista de espera >");

            listaClientes = recuperarLista(listaClientes);
            break;

        case 8:

            console.log("Cerrando el programa");

    }

    bConsola = readlineSync.keyInYN("Desea borrar la consola? ");
    if (bConsola == true) {
        console.clear();
    }

} while (opcion !== 8);