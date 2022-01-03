using System;

namespace Ejercicio3
{
    class Program
    {
        static void Main(string[] args)
        {
            float capacidad, numCDS;
            do
            {

            
                Console.WriteLine("¿Cuánta capacidad deseas almacenar en CD's? (indicar en gigabytes)");
                capacidad = float.Parse(Console.ReadLine());

                numCDS = (capacidad * 1024)/700;
                
                Console.WriteLine("La capacidad indicada ({0} gb) se puede almacenar en {1} CD's", capacidad, Math.Round(numCDS));



            } while (capacidad != 0);
        }
    }
}
