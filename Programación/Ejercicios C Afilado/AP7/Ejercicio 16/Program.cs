using System;
using System.Collections;

namespace Ejercicio_16
{
    class Program
    {
        static ArrayList medidaTemperaturas(ArrayList lista)
        {
            int temperatures = 0;
            int i = 0;
            do
            {
                Console.Write("Introduzca los grados ");

                temperatures = int.Parse(Console.ReadLine());
                lista.Add(temperatures);

            } while (temperatures != 99);
            lista.Remove(99);
            return lista;
        }
        static void Main(string[] args)
        {
            int maxTemp = 0;
            int minTemp = 100;
            int promedio = 0;
            ArrayList temperaturas = new ArrayList();
            medidaTemperaturas(temperaturas);
            foreach (int t in temperaturas)
            {
                promedio += t;
                Console.WriteLine("{0}ºC ", t);
                if (t > maxTemp)
                {
                    maxTemp = t;
                } else if (t < minTemp)
                {
                    minTemp = t;
                }
            }

            promedio /= temperaturas.Count;
            Console.WriteLine("La temperatura más alta ha sido {0}ºC, y la más baja {1}ºC", maxTemp, minTemp);
            Console.WriteLine("El promedio de la temperatura es {0}ºC", promedio);
            Console.ReadKey();
        }
    }
}
