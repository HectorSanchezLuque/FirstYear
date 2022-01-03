using System;

namespace Ejercicio_11
{
    class Program
    {
        static void Main(string[] args)
        {
            int numero, par, total;
            par = 0;
            total = 0;
            do
            {
                Console.Write("Dime un número ");
                numero = int.Parse(Console.ReadLine());
                total++;
                if (numero % 2 == 0)
                {
                    par++;
                }                

            } while (numero != 0);
            Console.WriteLine("Has introducido {0} numeros, de los cuales {1} eran pares y {2} impares", total, par, total - par);
            Console.ReadKey();
        }
    }
}
