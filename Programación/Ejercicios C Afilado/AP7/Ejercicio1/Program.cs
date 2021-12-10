using System;

namespace Ejercicio1
{
    class Program
    {
        static void Main(string[] args)
        {
            int numero;
            do
            {
                Console.WriteLine("Dime un número");
                numero = int.Parse(Console.ReadLine());

                switch (numero)
                {
                    case 1:
                        Console.WriteLine("El número {0} corresponde al número romano I", numero);
                        break;
                    case 2:
                        Console.WriteLine("El número {0} corresponde al número romano II", numero);
                        break;
                    case 3:
                        Console.WriteLine("El número {0} corresponde al número romano III", numero);
                        break;
                    case 4:
                        Console.WriteLine("El número {0} corresponde al número romano IV", numero);
                        break;
                    case 5:
                        Console.WriteLine("El número {0} corresponde al número romano V", numero);
                        break;
                    case 6:
                        Console.WriteLine("El número {0} corresponde al número romano VI", numero);
                        break;
                    case 7:
                        Console.WriteLine("El número {0} corresponde al número romano VII", numero);
                        break;
                    case 8:
                        Console.WriteLine("El número {0} corresponde al número romano VIII", numero);
                        break;
                    case 9:
                        Console.WriteLine("El número {0} corresponde al número romano IX", numero);
                        break;
                    case 10:
                        Console.WriteLine("El número {0} corresponde al número romano X", numero);
                        break;
                }
            } while (numero != 0);
        }
    }
}
