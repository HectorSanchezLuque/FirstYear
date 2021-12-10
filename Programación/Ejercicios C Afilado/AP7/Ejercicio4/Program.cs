using System;

namespace Ejercicio4
{
    class Program
    {
        static int comparador(int num1, int num2, int num3)
        {
            if (num1 > num2 && num1 > num3)
            {
                return num1;
            } else if (num2 > num1 && num2 > num3)
            {
                return num2;
            } else if (num3 > num1 && num3 > num2)
            {
                return num3;
            }
            return 0;

        }

        static void Main(string[] args)
        {
            int num1, num2, num3;

            Console.WriteLine("Dime un número");
            num1 = int.Parse(Console.ReadLine());

            Console.WriteLine("Dime otro número");
            num2 = int.Parse(Console.ReadLine());

            Console.WriteLine("Dime un número más");
            num3 = int.Parse(Console.ReadLine());

            Console.WriteLine("El mayor es el número {0}", comparador(num1, num2, num3));
            Console.ReadKey();
        }
    }
}
