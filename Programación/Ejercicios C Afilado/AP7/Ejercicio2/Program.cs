using System;

namespace Ejercicio2
{
    class Program
    {
        static void Main(string[] args)
        {
            string frase1, frase2;
            do
            {
                Console.WriteLine("Escribe la primera frase");
                frase1 = Console.ReadLine();

                Console.WriteLine("Escribe la segunda frase");
                frase2 = Console.ReadLine();

                if (frase1 == frase2)
                {
                    Console.WriteLine("Las frases son iguales");
                    Console.ReadKey();
                }
                else
                {
                    Console.WriteLine("Las frases no son iguales");
                    Console.ReadKey();
                }

            } while (frase1 != "salir" || frase2 != "salir");
        }
    }
}
