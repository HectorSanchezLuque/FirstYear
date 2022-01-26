using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ejercicio_5
{
    internal class Program
    {
        static Vehiculo IntroDatos()
        {
            string marc; string mod; double pot; double price;
            Console.WriteLine("Introducción de datos del vehículo");
            Console.WriteLine("========================");
            Console.WriteLine("Introduzca la marca del vehículo ");
            Console.Write("Marca: ");
            marc = Console.ReadLine();
            Console.Write("Modelo: ");
            mod = Console.ReadLine();
            Console.Write("Potencia: ");
            pot = double.Parse(Console.ReadLine());
            Console.Write("precio: ");
            price = double.Parse(Console.ReadLine());

            Vehiculo coche = new Vehiculo(marc, mod, pot, price);

            return coche;
        }
        static void Main(string[] args)
        {
            Console.WriteLine("Cuantos coches desea introducir? ");
            int cantidad = int.Parse(Console.ReadLine());
            
            Vehiculo[] coches = new Vehiculo[cantidad];

            for (int i = 0; i < coches.Length; i++)
            {
                coches[i] = IntroDatos();
            }

            int position = 0;
            double masBarato = double.MaxValue;

            for (int i = 0; i < coches.Length; i++)
            {
                if (coches[i].getPrecio() < masBarato)
                {
                    
                    position = i;
                }
            }
            Console.WriteLine("El coche más barato es: ");
            coches[position].MuestraInfo();
            Console.ReadKey();
        }
    }
}
