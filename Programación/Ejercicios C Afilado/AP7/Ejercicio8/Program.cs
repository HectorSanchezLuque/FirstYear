using System;

namespace Ejercicio8
{
    class Program
    {
        static int multiplicador(int num1, int num2, int num3)
        {
            for (int i = 0; i < num2-1; i++)
            {
                num1 += num3;

            }
            return num1;
        }
        static void Main(string[] args)
        {

            int numero1, numero2, numero3;

            Console.Write("Dime el número que deseas multiplicar ");
            numero1 = int.Parse(Console.ReadLine());
            numero3 = numero1;

            Console.Write("Dime cuántas veces deseas multiplicarlo ");
            numero2 = int.Parse(Console.ReadLine());

            Console.WriteLine("El resultado final es {0}", multiplicador(numero1, numero2, numero3));
            Console.ReadKey();

        }
    }
}
