function saludar() {
    if (a == "negra") {
        console.log("Cara al sol, con la camisa", a + "...")
    } else {
        console.log("Saluditos", a);

}
}
let readlineSync = require("readline-sync");

let a = readlineSync.question("A que/quien saludo? ")

saludar(a)