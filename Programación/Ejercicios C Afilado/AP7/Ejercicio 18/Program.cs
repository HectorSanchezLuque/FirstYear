using System;
using System.Collections.Generic;

namespace Ejercicio_18
{
    class Program
    {
        static void yearsEmpresa (int numyears)
        {
            if (numyears > 3 && numyears < 10)
            {
                Console.Write("Al empleado le pertenece una gratificación de {0} euros", 100 * numyears);

            } else if (numyears >= 10 && numyears <=15)
            {
                Console.Write("Al empleado le pertenece una gratificación de {0} euros", 115 * numyears);

            } else if (numyears > 15)
            {
                Console.Write("Al empleado le pertenece una gratificación de {0} euros", 130 * numyears);
            } else
            {
                Console.Write("Al empleado no le pertenece ninguna gratificación");
            }
        }
        static void Main(string[] args)
        {
            string nombre;
            int years;
            Console.Write("Introduzca el nombre del empleado ");
            nombre = Console.ReadLine();
            Console.Write("Introduzca los años que el empleado {0} lleva en la empresa ", nombre);
            years = int.Parse(Console.ReadLine());
            yearsEmpresa(years);
            Console.ReadKey();
            
        }
    }
}
