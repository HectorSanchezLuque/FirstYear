using System;
using System.Collections.Generic;

namespace Ejercicio_25
{
    class Program
    {
        static int calculaSuma(int num1, int num2)
        {
            int acumulador = 0;
            for (int i = num1; i < num2; i++)
            {
                if (i % 2 == 0)
                {
                    acumulador += i;
                }

            }
            return acumulador;
        }
        static void Main(string[] args)
        {
            int numero1, numero2;
            Console.Write("Dime el primer número ");
            numero1 = int.Parse(Console.ReadLine());
            Console.Write("Dime el segundo número ");
            numero2 = int.Parse(Console.ReadLine());
            Console.Write("La suma de los valores pares entre {0} y {1} es igual a {2}", numero1, numero2, calculaSuma(numero1, numero2));
            Console.ReadKey();
        }
    }
}
