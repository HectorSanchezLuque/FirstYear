using System;

namespace Ejercicio_14
{
    class Program
    {
        static void Main(string[] args)
        {
            int numero1, numero2, suma = 0;
            Console.Write("Dime el primer número ");
            numero1 = int.Parse(Console.ReadLine());

            Console.Write("Dime el segundo número ");
            numero2 = int.Parse(Console.ReadLine());

            for (int i = numero1; i < numero2; i++)
            {
                if (i % 2 != 0)
                {
                    suma += i;

                }
            }
            Console.WriteLine("La suma de los números impares entre el primer y el segundo número es {0}", suma);
            Console.ReadKey();
        }
    }
}
