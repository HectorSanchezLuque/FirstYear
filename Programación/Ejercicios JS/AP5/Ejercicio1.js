class Persona {
    constructor (nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.jubilada = false;

    }
    cumplirAnyos() {
        this.edad += 1
        console.log(this.edad);
        if (this.edad > 67) {
            this.jubilada = true;
        }
    }
}

let persona1 = new Persona ("Pepe", 66)

persona1.cumplirAnyos();

console.log(persona1)