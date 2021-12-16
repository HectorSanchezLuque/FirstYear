using System;

namespace Ejercicio10
{
    class Program
    {
        static void Main(string[] args)
        {
            int a = 1;
            for (a = 1; a < 1000; a = a * 2 + 1)
            {
                Console.WriteLine(a);
                Console.ReadKey();
}
        }
    }
}
