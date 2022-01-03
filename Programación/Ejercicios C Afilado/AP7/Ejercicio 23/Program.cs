using System;
using System.Collections.Generic;

namespace Ejercicio_23
{
    class Program
    {
        static int[] calculaPuntos(int g, int e, int p)
        {
            int[] arrayPuntos = new int[3];
            arrayPuntos[0] = g * 3;
            arrayPuntos[1] = e;
            arrayPuntos[2] = p;

            return arrayPuntos;

        }
        static void Main(string[] args)
        {
            int [] gep = new int[3];
            int ganados, empatados, perdidos;
            Console.Write("Cuántos partidos han ganado? ");
            ganados = int.Parse(Console.ReadLine());
            Console.Write("Cuántos partidos han empatado? ");
            empatados = int.Parse(Console.ReadLine());
            Console.Write("Cuántos partidos han perdido? ");
            perdidos = int.Parse(Console.ReadLine());
            gep = calculaPuntos(ganados, empatados, perdidos);

            Console.WriteLine("En total han ganado {0} puntos en {1} partidos que han jugado", gep[0] + gep[1], ganados + empatados + perdidos);
            Console.ReadKey();
        }
    }
}
