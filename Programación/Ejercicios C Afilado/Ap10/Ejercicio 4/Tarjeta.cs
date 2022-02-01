using System;

namespace Ejercicio_4
{
    class Tarjeta
    {
        private double saldo;

        public Tarjeta(double sald)
        {
            saldo = sald;
        }

        public double getSaldo()
        {
            return saldo;
        }

        public void setSaldo(double num)
        {
            saldo = num;
        }

        public double Descontar(double dinero)
        {
            saldo = saldo - dinero;
            return saldo;
        }

        public void VerSaldo()
        {
            Console.Write("Tu saldo actual es: {0} euros", saldo);
        }
    }
}
