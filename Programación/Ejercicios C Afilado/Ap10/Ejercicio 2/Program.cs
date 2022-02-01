using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ejercicio_2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Nombre del Teatro: ");
            string nombreTeatro = Console.ReadLine();

            Console.WriteLine("Dirección del Teatro: ");
            string dirTeatro = Console.ReadLine();

            string[] nombreFunciones = new string[4];
            double[] precioFunciones = new double[4];

            for (int i = 0; i < nombreFunciones.Length; i++)
            {
                Console.WriteLine("Introduzca el nombre de la función {0}: ", i+1);
                nombreFunciones[i] = Console.ReadLine();
                Console.WriteLine("Introduzca el precio de la función {0}: ", i+1);
                precioFunciones[i] = int.Parse(Console.ReadLine());
            }

            Teatro t1 = new Teatro(nombreTeatro, dirTeatro, nombreFunciones, precioFunciones);

            Console.WriteLine("El teatro {0}, localizado en la calle {1} ofrece las siguientes funciones:", t1.getNombre(), t1.getDireccion());
            for (int i = 0; i < nombreFunciones.Length; i++)
            {
                Console.WriteLine("Función 1: {0}; Precio: {1}", t1.DevuelveNombreFuncion(i), t1.DevuelvePrecioFuncion(i));
            }
            Console.ReadKey();
            

        }
    }
}
