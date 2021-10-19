/*
EJERCICIO 7. Programa que solicite la entrada un carácter por teclado 
hasta que se introduzca un punto ‘.’. En dicho momento deberá parar la ejecución. 
Mientras no se introduzca el punto, para cada letra introducida deberá informar 
si es un dígito (0 a 9), un carácter alfabético (a..z / A..Z). 
Utiliza una función tipoCaracter que reciba el carácter y devuelva si es dígito, alfabético u otro.  
*/

/* Función tipoCaracter:
Si devuelve un 1 es porque el caracter que recibe es un dígito
Si devuelve un 2 es porque el caracter que recibe es una letra minúscula o mayúscula.
Si devuelve un 3 es porque es otro tipo de caracter diferente a los anteriores.
*/
function tipoCaracter(caracter) {

    if (caracter.length == 1) {  // si la cadena tiene más de un caracter no hago nada.
        if (caracter >= '0' && caracter <= '9')
            return 1;
        else if (caracter >= 'a' && caracter <= 'z')
            return 2;
        else if (caracter >= 'A' && caracter <= 'Z')
            return 2;
        else
            return 3;
    }
}

// Esta función realiza la misma lógica mediante otro código. 
function tipoCaracterAlternativa(caracter) {
    if (caracter.length == 1) {
        let esDigito = (caracter >= '0' && caracter <= '9');
        let esLetra = (caracter >= 'A' && caracter <= 'Z') || (caracter >= 'a' && caracter <= 'z');
        if (esDigito) return 1;
        if (esLetra) return 2;
        return 3;       
    }
}

// Programa principal

let readlineSync = require('readline-sync');
let car = readlineSync.question('Dame un caracter. Para finalizar introduce un punto (\.) : ');

while (car != '.') {
    switch (tipoCaracter(car)) {
        case 1: // si devuelve 1 es dígito
            console.log(car,"es un dígito");
            break;
        case 2: // si devuelve 2 es alfabético
            console.log(car,"es alfabético");
            break;
        case 3: // si devuelve 3 es otro tipo de caracter diferente a los anteriores.
            console.log(car,"no es dígito ni alfabético");
            break;
    }
    // pido un nuevo caracter
    car = readlineSync.question('Dame un caracter. Para finalizar introduce un punto (\.) : ');
}

console.log("FIN DE PROGRAMA");