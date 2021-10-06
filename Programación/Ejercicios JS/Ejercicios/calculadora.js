let readlinesync = require ("readline-sync");
let a, b

let qqh = readlinesync.question("Que quieres hacer? ");
    if (qqh === "restar") {
        a = readlinesync.questionInt("Dime el primer numero " );
        b = readlinesync.questionInt("Dime el segundo numero " ); 
        console.log(a-b)
    } else if (qqh === "sumar") {
        a = readlinesync.questionInt("Dime el primer numero " );
        b = readlinesync.questionInt("Dime el segundo numero " ); 
        console.log(a+b)
    } else if (qqh === "multiplicar") {
        a = readlinesync.questionInt("Dime el primer numero " );
        b = readlinesync.questionInt("Dime el segundo numero " );
        console.log(a*b);
    } else if (qqh === "dividir") {
        a = readlinesync.questionInt("Dime el primer numero " );
        b = readlinesync.questionInt("Dime el segundo numero " );
        console.log(a/b);
    }  