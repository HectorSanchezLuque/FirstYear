using System;

// EJERCICIO 34. Crea una cadena de caracteres (string) que contenga de la ‘A’ a la ‘Z’ (solo las mayúsculas).
// Después, ve pidiendo posiciones por teclado y si la posición es correcta, 
// la letra correspondiente a esa posición se añadirá a un nuevo string que se mostrará al final del programa.
// Se dejará de insertar posiciones hasta que se introduzca un -1. 
// Por ejemplo, si escribo los siguientes números:
// 0 --> Añadirá la ‘A’
// 5 --> Añadirá la ‘F’
// 26 --> Añadirá la ‘Z’
// 50 --> No hará nada ya que la posición no pertenece al array.
// -1 --> Finalizará y visualizará “Cadena resultante: A,F,Z”


namespace EJ34
{
    class Program
    {
        static void Main(string[] args)
        {
            string alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
            string resultado = "";
            int posicion;

            do
            {
                Console.Write("Introduce posición: ");
                posicion = int.Parse(Console.ReadLine());
                if (posicion >=0 && posicion < alfabeto.Length) // la posición es correcta
                    resultado += alfabeto[posicion];

            } while (posicion != -1);

            Console.WriteLine("\nCadena resultante: {0}", resultado);
            Console.ReadKey();

        }
    }
}
