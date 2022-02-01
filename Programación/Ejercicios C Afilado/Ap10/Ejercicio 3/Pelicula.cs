using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ejercicio_3
{
    class Pelicula
    {
        private string nombre;
        private int anyoEstreno;
        private Actor[] actores;

        public Pelicula(string n, int ae, Actor[] ac)
        {
            nombre = n;
            anyoEstreno = ae;
            actores = ac;
        }

        public void VerDatosPeli()
        {
            Console.WriteLine("Nombre de la Película: {0} \n" +
                                       "Año de estreno: {1}", nombre, anyoEstreno);
            for (int i = 0; i < actores.Length; i++)
            {
                actores[i].VerDatosActor();
            }
                                        
        }

        public Actor[] getActoresMenores18()
        {
            List<Actor> actuadores = new List<Actor>();
            int j = 0;
            for (int i = 0; i < actores.Length; i++)
            {
                if (anyoEstreno - actores[i].getAnyoNacimiento() >= 18) ;
                {
                    actuadores.Add(actores[i]);
                    j++;
                }
            }
            for (int i = 0; i < actuadores.Count; i++)
            {
                Console.WriteLine(actuadores[i]);
            }
            return actores;
        }
    }
}
