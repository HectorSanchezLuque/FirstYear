using System;
using System.Collections.Generic;

namespace Ejercicio_31
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int pregunta, c, d, i = 1;
            List<int> lista1 = new List<int>();
            List<int> lista2 = new List<int>();

            do
            {
                Console.WriteLine("Escriba un número ");
                pregunta = int.Parse(Console.ReadLine());
                lista1[i] = pregunta;
                i++;
            } while (pregunta != 0);
            i = 0;

            do
            {
                Console.WriteLine("Escriba un número ");
                pregunta = int.Parse(Console.ReadLine());
                lista2[i] = pregunta;
                i++;
            } while (pregunta != 0);

            if (lista1.Count == lista2.Count)
            {
                for (int b = 0; b < lista1.Count; b++)
                {
                    c = lista1[b];
                    d = lista2[b];
                    Console.WriteLine(c * d);

                }
                Console.ReadKey();
            } else
            {
                Console.WriteLine("No se ha podido realizar la acción");
                Console.ReadKey();
            }
        }
    }
}
