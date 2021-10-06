/*
EJERCICIO 20. Realiza un programa que, tras introducir el precio inicial de un producto,
calcule su precio final teniendo en cuenta que: 
1) Se le puede aplicar dos tipos de IVA (16% o 21%). Se deberá preguntar este dato.
2) El comprador/a puede tener tres tipos de descuento, que pueden ser acumulativos: 
    5% si es de la localidad de Catarroja, 
    5% si es alumnado del ciclo formativo de DAM 
    5% si además es de 1er curso.
3) Los descuentos se aplicarán antes que el IVA. 

El programa debe informar del precio final, el importe del IVA aplicado en Euros,
así como de la totalidad de los descuentos aplicados
*/

let readlnSync = require('readline-sync');
let precioInicial = readlnSync.question('Introduce el precio inicial del producto: ');
let iva = readlnSync.question('Introduce el tipo de IVA (16% o 21%): ');
let localidad = readlnSync.question('Introduce tu localidad: ');
let titulacion = readlnSync.question('Introduce la titulacion que estas cursando (sus siglas): ');
let curso = readlnSync.question('Introduce el curso que estas cursando (1/2): ');

let precioFinal, descuentos, cantidadIva, porcenDescuentos = 0;

// Se pueden realizar todas las validaciones de los datos de entrada que se estimen oportunos.
let datosValidos = true;
if (!(iva == 16 || iva ==21)) datosValidos = false;
if (!(curso == 1 || curso == 2)) datosValidos = false;

if (!datosValidos) 
    console.log('Alguno de los datos introducidos no son válidos');
else {
        // si los datos son considerados como válidos, analizamos los descuentos
        if (localidad.toLowerCase() == 'catarroja') porcenDescuentos += 0.05;
        if (titulacion.toLowerCase() == 'dam') {
                porcenDescuentos += 0.05;
                if (curso == '1') porcenDescuentos += 0.05;
        }
        descuentos = precioInicial*porcenDescuentos;
        console.log('Dadas tus condiciones tienes un descuento del',(porcenDescuentos*100).toFixed(2),
        '%. La cantidad del descuento sería', descuentos.toFixed(2),' euros');


        // Aplicamos los descuentos al precio inicial.
        precioInicial = precioInicial - descuentos;
        // más abreviado sería --> precioInicial -= descuentos;

        // Calculamos el iva una vez descontados los descuentos del precio inicial.
        cantidadIva = precioInicial * iva/100;
        console.log('Aplicado el iva del',iva,'%, la cantidad de IVA es de ',cantidadIva,'euros');

        // Calculamos el precio final incrementando el IVA aplicado al precio tras los descuentos.
        precioFinal = precioInicial + cantidadIva;
        console.log('El precio final del productos es', precioFinal,'euros');
    }

