using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ejercicio_Práctico_1
{
    class Program
    {
        static void Main(string[] args)
        {
            // Con constructor

            /*Persona per1 = new Persona("Pepe", 25, false);
            per1.CumplirAnyos();
            per1.VerInfo();
            Console.ReadKey();*/

            // Sin constructor

            Persona per1 = new Persona();

            per1.setNombre("Héctor");
            per1.setEdad(-30);
            Console.WriteLine(per1.getEdad());
            Console.WriteLine(per1.getNombre());
            Console.ReadKey();

            /*per1.name = "Héctor";
            per1.age = 21;
            per1.retiree = false;

            per1.CumplirAnyos();
            per1.VerInfo();
            Console.ReadKey();

            Persona per2 = new Persona() { name = "Ana", age = 80};

            per2.CumplirAnyos();
            per2.VerInfo();
            Console.ReadKey();*/
        }
    }
}
