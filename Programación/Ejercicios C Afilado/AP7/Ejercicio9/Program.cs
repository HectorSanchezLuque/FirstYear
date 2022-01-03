using System;
namespace Ejercicio9
{
    class Program
    {
        static void Main(string[] args)
        {
            int i = 0;          
            do
            {
                i++;
                    if (i % 3 == 0)
                    {
                    Console.WriteLine("El número {0} es múltiplo de 3", i);
                    }
                
                
                Console.ReadKey();
            } while (i != 100);
        }
    }
}
