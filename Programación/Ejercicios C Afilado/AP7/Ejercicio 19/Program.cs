using System;
using System.Collections.Generic;
namespace Ejercicio_19
{
    class Program
    {
        static void primo(int a)
        {
            bool verdadero = true;
            for (int b = 2; b < 1000; b += 2)
            {
                if (b % 2 == 0)
                {
                    Console.Write("El número {0} es primo", b);
                }
            }

            static void Main(string[] args)
            {
                string pregunta;
                Console.Write("Dime los primos hasta 1000");
                primo();

            }
        }
    }
}
}