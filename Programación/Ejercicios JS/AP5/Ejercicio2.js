class Perro {
    constructor (nombre, raza, talla) {
        this.nombre = nombre;
        this.raza = raza;
        this.talla = talla;
    }
    ladrar() {
        if (this.talla > 50) {
            console.log("Buf, buf!")
        } else {
            console.log("Guauu!");
        }
    }
}

let dante = new Perro ("Dante", "Pastor Alemán", 54);

dante.ladrar();
console.log(dante);