using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ejercicio_2
{
    class Triangulo
    {
        private int lado1;
        private int lado2;
        private int lado3;

        public Triangulo (int l1, int l2, int l3)
        {
            lado1 = l1;
            lado2 = l2;
            lado3 = l3;

        }

        public Triangulo()
        {
            Console.Write("Introduce el lado 1: ");
            lado1 = int.Parse(Console.ReadLine());
            Console.Write("Introduce el lado 2: ");
            lado2 = int.Parse(Console.ReadLine());
            Console.Write("Introduce el lado 3: ");
            lado3 = int.Parse(Console.ReadLine());
        }

        public bool EsEquilatero()
        {
            if (lado1 == lado2 && lado2 == lado3)
            {
                return true;
            } else
            {
                return false;
            }
        }
        public bool EsIsosceles()
        {
            if (lado1 == lado2 && lado1 != lado3)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        public bool EsEscaleno()
        {
            if (lado1 != lado2 && lado2 != lado3)
            {
                return true;
            }
            else
            {
                return false;
            }
        }


    }
}
