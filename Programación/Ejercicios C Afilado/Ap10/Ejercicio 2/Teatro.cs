using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ejercicio_2
{
    internal class Teatro
    {
        private string nombre;
        private string direccion;
        private Funcion[] funciones = new Funcion[4];

        public Teatro(string nom, string dire, string[] nombres, double[] precios)
        {
            nombre = nom;
            direccion = dire;
            for (int i = 0; i < funciones.Length; i++)
            {
                funciones[i] = new Funcion(nombres[i], precios[i]);
            }
        }
        
        public string getNombre()
        {
            return nombre;
        }

        public string getDireccion()
        {
            return direccion;
        }

        public void CambiarNombre(string nom)
        {
            nombre = nom;
        }

        public void CambiarDireccion(string dire)
        {
            direccion = dire;
        }

        public void ActualizarNombreFuncion(int n_funcion, string nombre)
        {
            funciones[n_funcion].CambiarNombre(nombre);
        }

        public void ActualizarPrecioFuncion(int n_funcion, double precio)
        {
            funciones[n_funcion].CambiarPrecio(precio);
        }

        public string DevuelveNombreFuncion(int n_funcion)
        {
            return funciones[n_funcion].getNombre();
        }

        public double DevuelvePrecioFuncion(int n_funcion)
        {
            return funciones[n_funcion].getPrecio();
        }

    }
}

