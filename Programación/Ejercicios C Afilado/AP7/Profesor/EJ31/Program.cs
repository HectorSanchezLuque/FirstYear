using System;
using System.Collections.Generic;

// EJERCICIO 31. Desarrollar un programa en el que se pidan al usuario dos listas de números enteros 
// e indique en pantalla el producto de los elementos que ocupan la misma posición.
// En la petición de cada lista, la introducción de elementos terminará cuando se suministre 
// el valor cero(o). Si las listas proporcionadas no tienen la misma longitud, 
// se ha de escribir en pantalla un mensaje indicativo y no se realizará el proceso.

namespace EJ31
{
    class Program
    {

        private static void RellenarLista(List<int> lis)
        {
            int elemento;
            do
            {
                Console.Write("Introduce elemento (0 para teminar): ");
                elemento = int.Parse(Console.ReadLine());
                if (elemento != 0)
                    lis.Add(elemento);
            } while (elemento != 0);
        }

        static void Main(string[] args)
        {

            // Declaración e instanciación de las dos listas a utilizar (lista1 y lista2)
            List<int> lista1 = new List<int>();
            List<int> lista2 = new List<int>();

            // Relleno de las listas (utilizo una función para ello);
            Console.WriteLine("\nIntroduce la primera lista de números");
            RellenarLista(lista1);
            Console.WriteLine("\nIntroduce la segunda lista de números");
            RellenarLista(lista2);

            if (lista1.Count != lista2.Count)
                Console.WriteLine("\nLas listas no tienen la misma longitud.");
            else
                Console.WriteLine();   // Un salto de  linea
                for (int i=0; i<lista1.Count; i++)
                {
                    Console.WriteLine("Elemento lista1: {0} Elemento lista2: {1} Producto {2}",
                        lista1[i], lista2[i], lista1[i] * lista2[i]);
                }
            Console.ReadKey();
        }
    }
}
