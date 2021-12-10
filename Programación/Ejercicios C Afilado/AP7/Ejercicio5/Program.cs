using System;

namespace Ejercicio5
{
    class Program
    {
        static string tipoTriangulo(int l1, int l2, int l3) 
        {
            if (l1 == l2 && l1 == l3) 
            {
                return "equilátero";
            } else if (l1 == l2 && l1 != l3 || l1 == l3 && l1 != l2 || l2 == l3 && l2 != l1)
            {
                return "isósceles";
            } else
            {
                return "escaleno";
            }
        }
        static void Main(string[] args)
        {
            int lado1, lado2, lado3;

            Console.Write("Dime la longitud del primer lado ");
            lado1 = int.Parse(Console.ReadLine());

            Console.Write("Dime la longitud del segundo lado ");
            lado2 = int.Parse(Console.ReadLine());

            Console.Write("Dime la longitud del tercer lado ");
            lado3 = int.Parse(Console.ReadLine());

            Console.WriteLine("El triángulo es {0}",tipoTriangulo(lado1, lado2, lado3));
            Console.ReadKey();

        }
    }
}
