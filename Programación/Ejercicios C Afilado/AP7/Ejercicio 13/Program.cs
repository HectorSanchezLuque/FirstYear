using System;
namespace Ejercicio_13
{
    class Program
    {
        static int [] loteria()
        {
            Random rnd = new Random();

            int[] arrayLoteria = new int[6];
            for (int i = 0; i < 6; i++)
            {
                arrayLoteria[i] = rnd.Next();

            }
            return arrayLoteria;
        }
        static void Main(string[] args)
        {
            int[] loteria = new int[6];
            loteria = Program.loteria();
            for (int i = 0; i < loteria.Length; i++)
            {
                Console.WriteLine("El número {0} ha sido {1}", i+1, loteria[i]);

            }
            Console.ReadKey();
        }
    }
}
