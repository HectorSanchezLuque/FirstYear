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
            string nombre; int year;
            Console.WriteLine("Cuántos actores hay en la película? ");
            int indice = int.Parse(Console.ReadLine());
            Actor[] personasActoras = new Actor[indice];

            for (int i = 0; i < personasActoras.Length; i++)
            {

                Console.WriteLine("============================");
                Console.WriteLine("Introduzca el nombre del actor ");
                nombre = Console.ReadLine();
                Console.WriteLine("Introduzca la fecha de nacimiento del actor ");
                year = int.Parse(Console.ReadLine());
                personasActoras[i] = new Actor(nombre, year);
                
            }

            Pelicula p1 = new Pelicula("El señor de los Anillos", 2001, personasActoras);

            p1.VerDatosPeli();

            Console.Write(p1.getActoresMenores18());

            Console.ReadKey();
        }
    }
}
