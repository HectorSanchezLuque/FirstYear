using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ejercicio_3
{
    class Program
    {
        static void Main(string[] args)
        {
            Cuadrilatero figura1 = new Cuadrilatero(5, 6);
            Console.Write("Deseas calcular el área y perimetro de un rectángulo o un cuadrado? ");
            string pregunta = Console.ReadLine();
            if (pregunta == "cuadrado")
            {
                Console.WriteLine("El área del cuadrado es igual a: {0} cm", figura1.AreaCuadrado());
                Console.WriteLine("El perimetro del cuadrado es igual a: {0} cm", figura1.PerCuadrado());
            } else if (pregunta == "rectangulo")
            {
                Console.WriteLine("El área del rectángulo es igual a: {0} cm", figura1.AreaRectangulo());
                Console.WriteLine("El perimetro del rectángulo es igual a: {0} cm", figura1.PerRectangulo());
            }
            else
            {
                Console.WriteLine("Esa opción no existe");
            }
            Console.ReadKey();
        }
    }
}
