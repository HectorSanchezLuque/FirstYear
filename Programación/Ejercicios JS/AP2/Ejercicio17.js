let primo, numero, cantPrimos

numero = 2;
cantPrimos = 0;
do {
    primo = true
    for (let a = 2; a < numero; a++) {
        if (numero % a == 0) 
        primo = false;

    }
    
    if (primo == true) {
        cantPrimos++;
        console.log("El numero ", numero, "es primo"); 
    }
        numero++
} while (cantPrimos < 50);