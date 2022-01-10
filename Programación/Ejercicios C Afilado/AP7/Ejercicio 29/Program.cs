using System;

namespace Ejercicio_29
{
    internal class Program
    {
        static void Visualizar(int [] numeros)
        {
            for (int i = 0; i < numeros.Length; i++)
            {
                Console.WriteLine("{0}: {1}", i, numeros[i]);

            }

        }
        
        static int[] RellenarArray(int [] nombre)
        {
            nombre = new int[10];
            for (int i = 0; i < nombre.Length; i++)
            {
                nombre[i] = i;  
            }
            return nombre;

        }
        static void Main(string[] args)
        {
            int[] numeros = new int[10];
            numeros = RellenarArray(numeros);
            Visualizar(numeros);
            
            Console.ReadKey();

        }
    }
}
