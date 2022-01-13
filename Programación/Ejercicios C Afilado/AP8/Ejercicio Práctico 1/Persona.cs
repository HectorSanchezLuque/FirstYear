using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ejercicio_Práctico_1
{
    class Persona
    {
            string name;
            int age;
            bool retiree;


        public string getNombre()
        {
            return name;
        }

        public void setNombre(string nom)
        {
            name = nom;
        }

        public int getEdad()
        {
            return age;
        }

        public void setEdad(int edad)
        {
            if (edad < 0)
            {
                this.age = 0;
            } else
            {
                this.age = edad;
            }
        }
        public void VerInfo()
        {
            Console.WriteLine("Te llamas {0} y tienes {1} años", name, age);
            Console.WriteLine("Jubilado: {0}", retiree);
        }
        public int CumplirAnyos()
        {
            age++;
            if (age >= 67)
            {
                retiree = true;
            }
            return age;
        }
        
            // Constructor
            /*public Persona(string Nombre, int Edad, bool Jubilada)
            {
                name = Nombre;
                age = Edad;
                retiree = Jubilada;
            }*/
    }
}
