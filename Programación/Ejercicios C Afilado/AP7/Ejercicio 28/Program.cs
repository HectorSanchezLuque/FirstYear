using System;

namespace Ejercicio_28
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] numbers = new int[5];
            int acumulador = 0;
            for (int i = 0; i < numbers.Length; i++)
            {
                Console.Write("Introduzca un número ");
                numbers[i] = int.Parse(Console.ReadLine());
                acumulador += numbers[i]; 
            }
            Console.Write(acumulador / 5);
            Console.ReadKey();

        }
    }
}
