using System;

namespace Ejercicio6
{
    class Program
    {
        static void Main(string[] args)
        {
            string vocal;
            string[] vocales = new string[5] { "a", "e", "i", "o", "u" };

            Console.WriteLine("Dime una vocal");
            vocal = Console.ReadLine();
            vocal.ToLower();

            int indice = Array.IndexOf(vocales, vocal);
            if (indice == -1)
            {
                Console.WriteLine("Ese carácter no es una vocal");
            } else
            {
                indice += 1;
                Console.WriteLine("La letra {0} es la vocal número {1}", vocal, indice);
                
            }
            Console.ReadKey();
        }
    }
}
