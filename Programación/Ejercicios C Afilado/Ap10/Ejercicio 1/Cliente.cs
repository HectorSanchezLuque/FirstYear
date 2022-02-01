using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ejercicio_1
{
    internal class Cliente
    {
        private string nombre;
        private string apellido;
        private string nif;
        private Cuenta[] cuentas;

        public Cliente(string name, string apell, string idn, Cuenta[] c)
        {
            nombre = name;
            apellido = apell;
            nif = idn;
            cuentas = c;

        }
        
        public string getNombre()
        {
            return nombre;
        }

        public string getApellido()
        {
            return apellido;
        }

        public string getNif() 
        { 
            return nif;
        }

        public double ConsultarSaldo(int num)
        {
            return cuentas[num].getSaldo();
        }

        public void IngresarDinero(int num, double importe)
        {
            cuentas[num].Ingresar(importe);
        }

        public void RetirarDinero(int num, double importe)
        {
            cuentas[num].Retirar(importe);
        }
    }

    
}
