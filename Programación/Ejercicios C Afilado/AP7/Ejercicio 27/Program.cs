using System;

namespace Ejercicio_27
{
    internal class Program
    {
        static void CalculoDato (int prec, float desc, float iva)
        {
            desc = desc / 100;
            float pFinal = (prec - (prec / desc)) + (prec / iva);
            Console.WriteLine(pFinal);
            Console.WriteLine(prec % desc);
        }
        static void Main(string[] args)
        {
            int precio, descuento;
            const float iva = 16/100;

            do
            {
                Console.Write("Indique el valor del producto ");
                precio = int.Parse(Console.ReadLine());
                Console.Write("Indique el valor de descuento que desea aplicar ");
                descuento = int.Parse(Console.ReadLine());
                CalculoDato(precio, descuento, iva);
                Console.ReadKey();



            } while (precio != 0);
        }
    }
}
