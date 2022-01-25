using System;

/* Crea un programa que calcule la letra de un NIF a partir del número de DNI que introduzca el usuario.
 * Es decir, se debe pedir el DNI sin la letra por teclado y el programa nos devolverá el DNI completo 
 * (con la letra), es decir, el NIF.
 * Para calcular la letra a partir del DNI se sigue el siguiente algoritmo: se debe tomar el resto de 
 * dividir nuestro número de DNI entre 23. El resultado debe estar por tanto entre 0 y 22. 
 * La letra correspondiente será a la que apunte dicho índice en la siguiente tabla:
 * Crea una función obtenerLetra(numeroDNI) donde según el resultado de la anterior fórmula busque en 
 * un string/array de caracteres la posición que corresponda a la letra. */

namespace EJ35
{
    class Program
    {

        private static char ObtenerLetra(int valor)
        {
            const string tabla = "TRWAGMYFPDXBNJZSQVHLCKET";
            int indice;

            indice = (int)valor % 23;
            return tabla[indice];

        }

        static void Main(string[] args)
        {

            string dni;
            char letra;

            Console.Write("Introduce DNI: ");
            dni = Console.ReadLine();
            if (dni.Length == 8)
            {
                letra = ObtenerLetra(Convert.ToInt32(dni));
                Console.WriteLine("NIF completo: {0}-{1}", dni, letra);
            }
            else
                Console.WriteLine("DNI no válido");
        }
    }
}
