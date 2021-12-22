using System;
using System.Collections.Generic;
namespace Ejercicio_21
{
    class Program
    {
        static bool esMultiplo (int num)
        {
            if (num % 10 == 0)
            {
                return true;
            } else
            {
                return false;
            }
        }
        static void Main(string[] args)
        {
            int numero;
            Console.Write("Dime un número ");
            numero = int.Parse(Console.ReadLine());
            if (esMultiplo(numero))
            {
                Console.Write("{0} es multiplo de 10", numero);
            } else
            {
                Console.Write("{0} no es multiplo de 10", numero);
            }
            Console.ReadKey();

        }
    }
}
