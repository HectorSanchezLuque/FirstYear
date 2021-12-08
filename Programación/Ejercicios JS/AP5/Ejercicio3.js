class Persona {
    constructor(nombre, edad, sexo, peso, altura, dni) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.dni = dni;

    }
    calcularIMC() {
        let imc;
        imc = this.peso / (this.altura * this.altura);
        if (imc < 18.5) {
            console.log("Tu indice de masa corporal es bajo");
        }
        if (imc >= 18.5 && imc < 25) {
            console.log("Tu indice de masa corporal es normal");
        }
        if (imc > 25) {
            console.log("Tu indice de masa corporal es alto");
        }
    }

    esMayorDeEdad() {
        if (this.edad >= 18) {
            return true;
        } else {
            return false;
        }
    }

    comprobarSexo(sexo) {

    }
}


    persona1 = new Persona();

    persona1.dni = Math.trunc(Math.random() * 9).toString();

    for(let i = 0; i < 7; i++) {
    persona1.dni += Math.trunc(Math.random() * 9).toString();
}

persona1.calcularIMC();

