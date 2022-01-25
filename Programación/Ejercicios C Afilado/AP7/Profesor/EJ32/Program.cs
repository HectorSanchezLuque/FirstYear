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
            Random valor = new Random();
            for (int i = 0; i < 10; i++)
            {
                dato[i] = valor.Next(0,20);
            }
            return dato;
        }

        private static int[] CalculaDatos(int[] vect1, int[] vect2)
        {
            int[] prod = new int[10];
            for (int i=0;i<vect1.Length;i++)
            {
                prod[i] = vect1[i] + vect2[i];
            }
            return prod;
        }

        static void Main(string[] args)
        {

            // Declaración e instanciación de los arrays de 10 elementos necesarios
            int[] v1 = new int[10];
            int[] v2 = new int[10];
            int[] result = new int[10]; 
                        
            v1 = RellenarDatos();
            v2 = RellenarDatos();
            result = CalculaDatos(v1, v2);

            for(int i=0;i<result.Length;i++)
            {
                Console.WriteLine("Elemento {0} (v1): {1,5}  Elemento {0} (v2): {2,5}  " +
                                  "Elemento {0} (result): {3,5}", i, v1[i], v2[i], result[i]);
            }

            Console.ReadKey();
        }
    }
}

