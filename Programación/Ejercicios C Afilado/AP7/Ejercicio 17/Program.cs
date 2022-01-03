using System;
namespace Ejercicio_17
{
    class Program
    {
        static void Main(string[] args)
        {
            int numeroRandom;
            Random rnd = new Random();
            numeroRandom = rnd.Next(1, 100);
            bool acierto = false;
            int adivinar;
            Console.WriteLine(numeroRandom);
            do
            {
                Console.Write("Introduce un número ");
                adivinar = int.Parse(Console.ReadLine());
                if (adivinar == numeroRandom)
                {
                    acierto = true;
                } else if (numeroRandom > adivinar)
                {
                    Console.WriteLine("Has introducido un número demasiado pequeño");
                } else if (numeroRandom < adivinar)
                {
                    Console.WriteLine("Has introducido un número demasiado grande");
                }

            } while (acierto != true);
        }
    }
}
