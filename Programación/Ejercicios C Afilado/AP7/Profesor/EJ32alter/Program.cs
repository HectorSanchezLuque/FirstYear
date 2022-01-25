using System;
using System.Collections.Generic;

// EJERCICIO 32. Crea dos Arrays de números positivos entre 0 y 20 que sean generados de forma aleatoria.
// El tamaño de los Arrays debe ser de 10 elementos. 
// Después, crea una función que reciba como parámetros los dos Arrays creados 
// y devuelva un nuevo Array con la suma de la posición cero del array1 con el del array2
// y así sucesivamente hasta su último elemento. Por último, muestra el contenido de cada array
// (array1, array2 y el resultante de la suma de los elementos de ambos).

namespace EJ32
{
    class Program
    {

        
        private static int[] RellenarDatos()
        {
            int[] dato = new int[10];
            for(int i=0;i<10;i++)
            {
                Console.Write("Introduce dato {0}: ", i + 1);
                dato[i] = int.Parse(Console.ReadLine());
            }
            return dato;
        }


        private static void CalculaDatos(int[] vect1, int[] vect2, int[] prod)
        {
            for(int i=0;i<vect1.Length;i++)
            {
                prod[i] = vect1[i] + vect2[i];
            }
        }

        static void Main(string[] args)
        {

            // Declaración e instanciación de los arrays de 10 elementos necesarios
            int[] v1 = new int[10];
            int[] v2 = new int[10];
            int[] result = new int[10];

            // Relleno los dos arrays con una función
            Console.WriteLine("\nIntroduce los números del primer Array");
            v1 = RellenarDatos();
            Console.WriteLine("\nIntroduce los números del segundo Array");
            v2 = RellenarDatos();

            CalculaDatos(v1, v2, result);

            for(int i=0;i<result.Length;i++)
            {
                Console.WriteLine("Elemento {0} (v1): {1}  Elemento {0} (v2): {2}  " +
                                  "Elemento {0} (result): {3}", i, v1[i], v2[i], result[i]);
            }

            Console.ReadKey();
        }
    }
}

