using System;
using System.Collections.Generic;

namespace Ejercicio_26
{
    class Program
    {
        static bool Primo(int a)
        {
            bool verdadero = true;
            for (int b = 2; b < a; b++)
            {
                if (a % b == 0)
                {
                    verdadero = false;
                    b = a;
                } else
                {
                    verdadero = true;
                }
            }
            return verdadero;
        }
        static void Main(string[] args)
        {
            int num;
            Console.Write("Introduce un número ");
            num = int.Parse(Console.ReadLine());
        }
    }
}
