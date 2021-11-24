function describirPersona(p) {
    console.log(p.nombre, "tiene", p.edad, "años");
}



class Persona {
    constructor(nombre, apellido1, apellido2, edad, casada, altura) {
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.edad = edad;
        this.casada = casada;
        this.altura = altura;
    }
}
let lista = new Array();



lista = [new Persona("Ana", "López", "Martín", 24, false, 1.80), new Persona("Pepe", "Giralta", "Ñuñez", 45, true, 1.84), new Persona("Gustavo", "Adolfo", "Béquer", 56, false, 1.68)]


for (let i = 0; i < lista.length; i++) {
    describirPersona(lista[i]);
}
