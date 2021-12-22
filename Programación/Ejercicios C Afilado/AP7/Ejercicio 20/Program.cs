using System;
using System.Collections.Generic;

namespace Ejercicio_20
{
    class Program
    {
        static void Main(string[] args)
        {
            int precio, iva;
            do
            {
                Console.Write("Indique el precio del producto ");
                precio = int.Parse(Console.ReadLine());
                Console.Write("Indique el IVA que se debe aplicar ");
                do
                {
                    iva = int.Parse(Console.ReadLine());
                    Console.Write("IVA erróneo, vuelva a indicarlo");

                } while (iva > 16 && iva < 21);
                int precioIVA = precio % iva;
                Console.Write("El precio del producto es {0} euros sin aplicar el IVA, el precio final es {1} euros", precio, precioIVA += precio);
                Console.ReadKey();
                
              
            } while (precio != 0);
        }
    }
}
