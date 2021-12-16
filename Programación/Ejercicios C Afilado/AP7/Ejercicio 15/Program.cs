using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ejercicio_15
{
    class Program
    {
        static void Main(string[] args)
        {
            string password;
            int intentos = 0;
            do
            {
                Console.Write("Introduce la contraseña ");
                password = Console.ReadLine();
                if (password != "ALDEBARAN")
                {
                    Console.WriteLine("Contraseña errónea");
                    intentos++;
                } 

            } while (intentos != 5 && password != "ALDEBARAN");
             
            if (intentos == 5)
            {
                Console.WriteLine("Has excedido el número de intentos");
                Console.ReadKey();
            }
            }
    }
}
