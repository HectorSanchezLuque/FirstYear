using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CrazyName
{
    internal class Persona
    {
        string name;
        int age;
        string job;

        private Persona(string Nombre, int Edad, string Trabajo)
        {
            name = Nombre;
            age = Edad;
            job = Trabajo;
        }
        private void NombreRandom()
        {
            Random rnd = new Random();
            string [] nomine = new string[10];
            
            nomine[0] = "Arturo";
            nomine[1] = "Roberto";
            nomine[2] = "Gustavo";
            nomine[3] = "Luisa";
            nomine[4] = "María";
            nomine[5] = "Pepe";
            nomine[6] = "Soraya";
            nomine[7] = "Ana";
            nomine[8] = "Federico";
            nomine[9] = "Carolina";

            int numero = rnd.Next(nomine.Length);

            name = nomine[numero];
        }
        
    }
}
