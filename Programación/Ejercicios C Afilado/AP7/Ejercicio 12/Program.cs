using System;

namespace Ejercicio_12
{
    class Program
    {
        static void Main(string[] args)
        {
            char numero;
            int entre0Y9;
            entre0Y9 = 0;
            do
            {
                Console.Write("Introduce un dígito ");
                numero = char.Parse(Console.ReadLine());
                if (numero >= 0 && numero <=9)
                {
                    entre0Y9++;
                }

                
            } while (numero != '.');
            Console.WriteLine("Has introducido {0} números entre '0' y '9'");
            Console.ReadKey();
        }
    }
}
