using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ejercicio_3
{
    class Actor
    {
        private string nombre;
        private int anyoNac;


        public Actor(string n, int an)
        {
            nombre = n;
            anyoNac = an;
        }

        public int getAnyoNacimiento()
        {
            return anyoNac;
        }

        public void VerDatosActor()
        {
            Console.WriteLine("=================================");
            Console.WriteLine("Actor");
            Console.WriteLine("Nombre: {0} \n Fecha de Nacimiento: {1}", nombre, anyoNac);
        }

        public void setNombre(string n)
        {
            nombre = n;
        }

        public void setYear(int y)
        {
            anyoNac = y;
        }
    }
}
