using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ejercicio_2
{
    internal class Funcion
    {
        private string nombre;
        private double precio;

        public Funcion(string nom, double prec)
        {
            nombre = nom;
            precio = prec;
        }

        public string getNombre()
        {
            return nombre;
        }

        public double getPrecio()
        {
            return precio;
        }

        public void CambiarNombre(string nom)
        {
            nombre = nom;

        }

        public void CambiarPrecio(double pre)
        {
            precio = pre;
        }
    }
}
