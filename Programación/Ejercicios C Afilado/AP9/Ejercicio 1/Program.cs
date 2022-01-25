using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ejercicio_1
{
    internal class Program
    {
        static void Main(string[] args)
        {

            Socio soc1 = new Socio();
            soc1.Informa();
            soc1.CalcularIMC();
            soc1.EsMayorDeEdad();
            Console.ReadKey();

            Socio soc2 = new Socio("Héctor", 21, 75, char.Parse("H"), 1.75);
            soc2.Informa();
            soc2.CalcularIMC();
            soc2.EsMayorDeEdad();
            Console.ReadKey();
        }
    }
}
