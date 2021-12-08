using System;

namespace Aplicación
{
    class Program
    {
        static void Main(string[] args)
        {
            int a, b, resultado;
            string accion;
            Console.WriteLine("Dame el primer número");
            a = int.Parse(Console.ReadLine());
            Console.WriteLine("Dame el segundo número");
            b = int.Parse(Console.ReadLine());
            Console.WriteLine("Quieres restar o sumar?");
            accion = Console.ReadLine();
            if (accion == "sumar")
            {
                Console.WriteLine(resultado = a + b);
                Console.ReadKey();
            } else
            {
                Console.WriteLine(resultado = a - b);
                Console.ReadKey();

            }
            
        }
        static int Suma(int num1, int num2)
        {
            return num1 + num2;
        }
    }
}
