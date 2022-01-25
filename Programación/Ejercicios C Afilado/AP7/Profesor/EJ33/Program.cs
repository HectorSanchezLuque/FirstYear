using System;

// EJERCICIO 33. Desarrollar un programa en el que se pidan al usuario un array de 5 números enteros.
// Tras visualizar todos los números introducidos, debe indicar si dicho vector es capicúa,
// es decir, la secuencia de sus elementos es igual vista de delante hacia atrás y de detrás hacia delante.

namespace EJ33
{
    class Program
    {

        private static void RellenaArreglo(int[] vector)
        {
            for(int i=0; i<5; i++)
            {
                Console.Write("Introduce elemento {0}: ", i + 1);
                vector[i] = int.Parse(Console.ReadLine());
            }
        }

        private static void VisualizaArreglo(int[] vector)
        {
            Console.WriteLine("\nElementos del array");
            foreach (int valor in vector)
            {
                Console.Write("{0,5}",valor);
            }
        }

        private static bool EsCapicua(int[] vector)
        {
            bool capicua = true;
            for (int i=0; i<vector.Length; i++)
            {
                if (vector[i] != vector[vector.Length - i - 1])  // analizar la comparativa
                    capicua = false;
            }
            return capicua;
        }

        static void Main(string[] args)
        {
            int[] arreglo = new int[5];
            RellenaArreglo(arreglo);
            VisualizaArreglo(arreglo);

            if (EsCapicua(arreglo))
                Console.WriteLine("\nES CAPICUA");
            else
                Console.WriteLine("\nNO ES CAPICUA");
            Console.ReadKey();
        }
    }
}
