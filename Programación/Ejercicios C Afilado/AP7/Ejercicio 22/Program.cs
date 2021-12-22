using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ejercicio_22
{
    class Program
    {
        static int diferenciaEdad (int e1, int e2)
        {
            int difEdad;
            difEdad = e1 - e2;
            if (difEdad < 0)
            {
                difEdad *= -1;
            }
            return difEdad;
        }
        static void Main(string[] args)
        {
            int edad1, edad2;
            Console.Write("Dime la edad del primer hermano ");
            edad1 = int.Parse(Console.ReadLine());
            Console.Write("Dime la edad del segundo hermano ");
            edad2 = int.Parse(Console.ReadLine());
            Console.Write("La diferencia de edad entre los dos hermanos es {0} años", diferenciaEdad(edad1, edad2));
            Console.ReadKey();

            
        }
    }
}
