let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let dia = 0;
let mes = 0;
const year = 2021;

for (let i = 0; i < 10; i++) {
    dia = Math.trunc(Math.random()*31+1);
    if (mes = 12) {
        mes = 0;
    }
    mes = Math.trunc(Math.random()*12);

    if (dia > 28 && mes == 1) {
        dia =  dia - 28;
        if (dia == 0) {
            dia = 1;
        }
        mes = 2;

    } else if (dia > 30 && mes == 3, 5, 8, 10) {
        dia = dia - 30;
        if (dia == 0) {
            dia = 1;
        }
        mes = mes + 1;
    }
    if (dia < 0) {
        dia = dia * -1;
    }
    console.log("Es el día "+ dia, "de "+ meses[mes], "del año "+ year);
}

