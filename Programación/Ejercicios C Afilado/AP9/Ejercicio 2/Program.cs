using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ejercicio_2
{
    class Program
    {
        static void Main(string[] args)
        {
            Triangulo tri1 = new Triangulo(7, 7, 7);
            Triangulo tri2 = new Triangulo(1, 1, 3);
            Triangulo tri3 = new Triangulo(1, 2, 3);

            if (tri1.EsEquilatero())
            {
                Console.WriteLine("El triángulo es equilátero ");

            }
            else if (tri1.EsEscaleno())
            {
                Console.WriteLine("El triángulo es escaleno");
            }
            else if (tri1.EsIsosceles())
            {
                Console.WriteLine("El triángulo es isósceles");
            }
            if (tri2.EsEquilatero())
            {
                Console.WriteLine("El triángulo es equilatero ");
            }
            else if (tri2.EsEscaleno())
            {
                Console.WriteLine("El triángulo es escaleno");
            }
            else if (tri2.EsIsosceles())
            {
                Console.WriteLine("El triángulo es isósceles");
            }
            if (tri3.EsEquilatero())
            {
                Console.WriteLine("El triángulo es equilatero ");
            }
            else if (tri3.EsEscaleno())
            {
                Console.WriteLine("El triángulo es escaleno");
            }
            else if (tri3.EsIsosceles())
            {
                Console.WriteLine("El triángulo es isósceles");
            }


            Console.ReadKey();
            

            }

        }
    }

