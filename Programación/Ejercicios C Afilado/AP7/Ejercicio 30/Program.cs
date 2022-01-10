using System;

namespace Ejercicio_30
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int pares = 0;
            int numeros;
            int [] lista = new int[10];
            for (int i = 0; i < lista.Length; i++)
            {
                Console.WriteLine("Introduzca un número ");
                numeros = int.Parse(Console.ReadLine());
                if (numeros % 2 == 0)
                {
                    pares++;
                }
                lista[i] = numeros;

            }
            Console.WriteLine("Ha introducido {0} número(s) pares y {1} número(s) impares", pares, lista.Length - pares);
            Console.ReadKey();
        }
    }
}
