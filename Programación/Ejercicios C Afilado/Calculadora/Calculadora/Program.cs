using System;

namespace Calculadora
{
    class Program
    {
        public static int Suma(int num1, int num2)
        {
            int resultado = num1 + num2;
            return resultado;
        }

        public static int Restar(int num1, int num2) 
        {
            int resultado = num1 - num2;
            return resultado;
        }

        public static int Multiplicar(int num1, int num2)
        {
            int resultado = num1 * num2;
            return resultado;
        }

        public static int Dividir(int num1, int num2)
        {
            int resultado = num1 / num2;
            return resultado;
        }

        public static int Sumatorio(int num1) 
        {
            Random rnd = new Random();
            int[] arrayNumeros = new int[num1];
            for (int i = 0; i < num1; i++)
            {
                int num = rnd.Next();

                arrayNumeros[i] = num;
                
            }
            int suma = 0;
            for (int i = 0; i < arrayNumeros.Length; i++)
            {
                suma += arrayNumeros[i];
            }
            return suma;
        }
        static void Main(string[] args)
        {
            int a, b;
            string pregunta;
            do
            {

                Console.WriteLine("¿Qué desea hacer?");
                pregunta = Console.ReadLine();
                pregunta.ToLower();

                switch (pregunta)
                {
                    case "sumar":
                        Console.WriteLine("Dime dos números");
                        a = int.Parse(Console.ReadLine());
                        b = int.Parse(Console.ReadLine());
                        Console.WriteLine("El resultado es: " + Suma(a, b));
                        Console.ReadKey();
                        break;

                    case "restar":
                        Console.WriteLine("Dime dos números");
                        a = int.Parse(Console.ReadLine());
                        b = int.Parse(Console.ReadLine());
                        Console.WriteLine("El resultado es: " + Restar(a, b));
                        Console.ReadKey();
                        break;

                    case "multiplicar":
                        Console.WriteLine("Dime dos números");
                        a = int.Parse(Console.ReadLine());
                        b = int.Parse(Console.ReadLine());
                        Console.WriteLine("El resultado es: " + Multiplicar(a, b));
                        Console.ReadKey();
                        break;

                    case "dividir":
                        Console.WriteLine("Dime dos números");
                        a = int.Parse(Console.ReadLine());
                        b = int.Parse(Console.ReadLine());
                        Console.WriteLine("El resultado es: " + Dividir(a, b));
                        Console.ReadKey();
                        break;

                    case "sumatorio":
                        Console.WriteLine("Dime cuantos números quieres sumar");
                        a = int.Parse(Console.ReadLine());
                        Console.WriteLine("El resultado es: " + Sumatorio(a));
                        Console.ReadKey();
                        break;

                }
            } while (pregunta != "salir");


        }
    }
}
