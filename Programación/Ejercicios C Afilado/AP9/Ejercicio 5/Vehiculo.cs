using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ejercicio_5
{
    internal class Vehiculo
    {
        private string marca;
        private string modelo;
        private double potencia;
        private double precio;

        public Vehiculo(string marc, string mod, double pot, double price)
        {
            marca = marc.ToUpper();
            modelo = mod.ToUpper();
            potencia = pot;
            precio = price;
                
        }

        public double getPrecio()
        {
            return precio;
        }

        public void MuestraInfo()
        {
            Console.WriteLine("Marca: {0}\t Modelo: {1}\n" +
                              "Potencia: {2}\t Precio: {3}", 
                              marca, modelo, potencia, precio);
        }
    }
}
