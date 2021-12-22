using System;

namespace RickRoll
{
    class Program
    {
        static void Main(string[] args)
        {
            double[] hz = new double[20];
            hz[0] = 493.88;
            Console.Beep(hz[0], 1);
            Console.ReadKey();
        }
    }
}
