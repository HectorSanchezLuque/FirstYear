using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ejercicio_1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Cuenta[] cuentas = new Cuenta[2];

            cuentas[0]= new Cuenta(254, 1000);
            cuentas[1]= new Cuenta(345, 750);

            Cliente c1 = new Cliente("Pepe", "Martínez", "55443322Y", cuentas);

            Console.WriteLine("Cliente: {0} {1}", c1.getNombre(), c1.getApellido());
            for (int i = 0; i < cuentas.Length; i++)
            {
                Console.WriteLine("Saldo de la cuenta {0}: {1}", i, c1.ConsultarSaldo(i));

            }

            c1.IngresarDinero(0, 5000);
            c1.IngresarDinero(1, 2500);

            Console.WriteLine("Cliente: {0} {1}", c1.getNombre(), c1.getApellido());
            for (int i = 0; i < cuentas.Length; i++)
            {
                Console.WriteLine("Saldo de la cuenta {0}: {1}", i, c1.ConsultarSaldo(i));

            }

            Console.ReadKey();
        }
    }    
}
