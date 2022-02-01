using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ap4_Ej11
{
    internal class Program
    {
        static void Main(string[] args)
        {
            ArrayList nums = new ArrayList();

            for (int i = 0; i < 10; i++)
            {
                int j = i;
                Console.WriteLine("Introduce un número");
                nums.Add(Console.ReadLine());
            }
            nums.Sort();

            foreach (object obj in nums)
            {
                Console.WriteLine(obj.ToString());
            }
            Console.ReadKey();
        }
    }
}



