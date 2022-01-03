using System;
using System.Collections.Generic;

namespace Ejercicio_24
{
    class Program
    {
        static string tipoCaracter (char caracter)
        {
            if (caracter > 'a' && caracter < 'z' || caracter > 'A' && caracter < 'Z')
            {
                return "string";
            } else if (caracter > 0 && caracter < 9)
            {
                return "número";
            } else
            {
                return "otro";
            }
            
        }
        static void Main(string[] args)
        {
            char caracter;
            do
            {
                Console.Write("Introduce un carácter ");
                caracter = char.Parse(Console.ReadLine());
                Console.WriteLine("El carácter introducido es un {0}", tipoCaracter(caracter));
            } while (caracter != '.');
        }
    }
}
