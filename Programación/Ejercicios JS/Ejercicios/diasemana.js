let readlinesync = require ('readline-sync');
let diaSemana = readlinesync.question("Que dia de la semana es?");
diaSemana = diaSemana.toLowerCase();


switch (diaSemana) {
    case "lunes":
        console.log("es el día 1");
        break;
    case "martes":
        console.log("es el día 2");
        break;
    case "miércoles":
        console.log("es el día 3");
        break;
    case "jueves":
        console.log("es el día 4");
        break;
    case "viernes":
        console.log("es el día 5");
        break;
    case "sábado":
        console.log("es el día 6");
        break;
    case "domingo":
        console.log("es el día 7");
        break;
    default: console.log("Eso no es un día");
}