using System;


namespace Proyecto_3
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(" ** CAPITAL DE LA EMPRESA ** ");
            Console.WriteLine(" ");

            double monto1, monto2, monto3;

            Console.Write("Ingrese monto socio 01: $ ");
            monto1 = double.Parse(Console.ReadLine());
            Console.Write("Ingrese monto socio 02: $ ");
            monto2 = double.Parse(Console.ReadLine());
            Console.Write("Ingrese monto socio 03: $ ");
            monto3 = double.Parse(Console.ReadLine());

            double capital = monto1 + monto2 + monto3;
            double pSocio1 = (monto1 * 100) / capital;
            double pSocio2 = (monto2 * 100) / capital;
            double pSocio3 = (monto3 * 100) / capital;

            Console.WriteLine("----------------------------------");
            Console.WriteLine("CAPITAL: $ " + capital.ToString("0.00"));
            Console.WriteLine("PORCENTAJE SOCIO 1: " + pSocio1.ToString("0.00"));
            Console.WriteLine("PORCENTAJE SOCIO 2: " + pSocio2.ToString("0.00"));
            Console.WriteLine("PORCENTAJE SOCIO 3: " + pSocio3.ToString("0.00"));

            Console.ReadKey();


        }
    }
}
