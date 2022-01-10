using System;
namespace Ejercicio_32
{
    internal class Program
    {
        static int[] RellenarArray (int [] lista)
        {
            Random rnd = new Random();
            for (int i = 0; i < lista.Length; i++)
            {
                lista[i] = rnd.Next(0,20);
            }
            return lista;

        }
        static int[] SumarArray (int[] l1, int [] l2, int [] l3)
        {
            for (int i = 0; i < l1.Length; i++)
            {
                l3[i] = l1[i] + l2[i];
            }
            return l3;
        }
        static void Main(string[] args)
        {
            
            int[] lista1 = new int[10];
            int[] lista2 = new int[10];
            int[] lista3 = new int[10];
            RellenarArray(lista1);
            RellenarArray(lista2);
            SumarArray(lista1, lista2, lista3);

            for (int i = 0; i < lista1.Length; i++)
            {
                Console.WriteLine("{0} + {1} = {2}", lista1[i], lista2[i], lista3[i]);
            }
            Console.ReadKey();
            

        }
    }
}
