/*
En este caso, sabemos que la codificación del mensaje se basa en desplazar
cada letra 10 posiciones a la derecha, en el abecedario que utiliza el ejército enemigo.
Con la salvedad de que si se nos acaba el abacedario, hay que volver a empezar.
Es decir, se recorre el abecedario de forma cíclica.
Por ejemplo, para codificar la u nos da como resultado la e,
ya que si desplazas 5 posiciones llegas a la z, y vuelves a empezar por la a,
hasta que llegas a la e (en total 10 posiciones)

Por lo tanto, para descifrar tenemos que revertir el proceso, desplazando
hacia la izquierda la letra 10 posiciones y si acabamos el abecedario, 
volveremos a empezar desde el final. Por ejemplo, la b corresponderá a la r    
*/

//string: abecedario que utiliza el ejército enemigo
//lleva un * al final para usarlo como separador                                             
let abecedario = "abcdefghijklmnopqrstuvwxyz*"; 

//string: mensaje cifrado o encriptado que hemos interceptado del enemigo
let mensaje = "kck*dojkoaoyjbylaojmkckaaytkjovjvdxobjkjvkbjymry"; 

//posición dentro del abecedario que utilizamos para descifrar
let posicion; 

//array: donde iremos almacenando el mensaje conforme lo vayamos descifrado
let descifrado = []; 

//Recorremos el mensaje cifrado para irlo descifrando letra a letra
for (i=0; i<mensaje.length; i++){
    
    //Calculamos la posición en el abecedario de la letra del texto cifrado
    posicion = abecedario.indexOf(mensaje[i]);

    //Desplazamos la posición 10 unidades hacia la izquierda pero...
    posicion = posicion - 10; 


    //Llegados a este punto, puede ser que la posición sea negativa... 
    //si eso sucede, tendremos que hacer un ajuste en 
    //la variable posicion para funcione de forma cíclica dentro del abecedario

    if (posicion < 0){
        posicion = posicion * (-1);
        posicion = 27 - posicion;
    }

    
    descifrado[i] = abecedario[posicion];
}
