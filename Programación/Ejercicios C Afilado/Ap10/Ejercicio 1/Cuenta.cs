using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ejercicio_1
{
    internal class Cuenta
    {
        private int numCuenta;
        private double saldo;

        public Cuenta (int nCuenta, double cSaldo)
        {
            numCuenta = nCuenta;
            if (cSaldo < 0)
            {
                saldo = 0;
            } else
            {
                saldo = cSaldo;
            }
        }
        public double getSaldo()
        {
            return saldo;
        }
        
        public void Ingresar(double cantidad)
        {
            if (cantidad > 0)
            {
                saldo+=cantidad;
            }
        }

        public void Retirar(double cantidad)
        {
            if (saldo < cantidad)
            {
                saldo-=cantidad;
            }
        }
    }
}
