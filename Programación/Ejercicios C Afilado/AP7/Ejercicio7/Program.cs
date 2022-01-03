using System;

namespace Ejercicio7
{
    class Program
    {
        static int[] promedio(int[] arr)
        {
            int acumulador, numMax, media;
            acumulador = 0;
            numMax = 0;

            for (int i = 0; i < arr.Length; i++)
            {
                acumulador += arr[i];
                if (arr[i] > numMax)
                {
                    numMax = arr[i];
                }               
            }
            media = acumulador / (arr.Length + 1);
            int[] maxYmedia = new int[2];
            maxYmedia[0] = numMax;
            maxYmedia[1] = media;
            return maxYmedia;
        }

        static void Main(string[] args)
        {
            int[] arraySueldos = new int[5];

            for (int i = 0; i < arraySueldos.Length; i++)
            {
                Console.Write("Dime el sueldo ");
                arraySueldos[i] = int.Parse(Console.ReadLine());
            }

            int[] maxYmedia = new int[2];

            maxYmedia = promedio(arraySueldos);
            Console.WriteLine("La media de los sueldos es {1} euros y el sueldo maxímo es {0} euros", maxYmedia[0], maxYmedia[1]);
            Console.ReadKey();
        }
    }
}
