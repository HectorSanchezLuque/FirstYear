using System;
using System.Collections;   // para ArrayList
using System.Collections.Generic;  // para List<T>

namespace UsoDeListas
{
    class Program
    {

        static void VisualizaLista(ArrayList lis)
        {
            Console.WriteLine("\nInformo de los elementos presentes en la lista");
            
            for (int i = 0; i < lis.Count; i++)   // --> Recorrido por índice
            {
                Console.WriteLine("{0}", lis[i]);
            }
            //foreach (string elem in lis)  // Recorrido con foreach
            //{
            //    Console.WriteLine("{0}", elem);
            //}

            Console.WriteLine("Número de elementos de la lista: {0}", lis.Count);
            Console.ReadKey();
        }


        static void Main(string[] args)
        {

            string valor;

            // Declaro mi variable lista e instancio un objeto de la clase ArrayList
            ArrayList miLista = new ArrayList();
            
            // OJO: En el caso de un List fuertemente tipado sería: List<string> miLista = new List<string>();
            // OJO: y el método VisualizaLista tendría como prototipo: static void VisualizaLista (List<string> miLista)
            // OJO: Esta sería la única diferencia con respecto a usar una lista de la clase ArrayList (debilmente tipada)
            
            // Visualizo el número de elementos de mi lista.
            Console.WriteLine("Número de elementos de la lista: {0}", miLista.Count);
            Console.ReadKey();

            // Agrego 10 elementos de tipo cadena (string) a mi lista.
            Console.WriteLine("\nAgrego 10 elementos -string- en la lista");
            for (int i=0; i<10; i++)
            {
                valor = "cadena " + i;
                miLista.Add(valor); // utilizo el método Add para añadir en la lista.
            }

            // Visualizo el estado de la lista
            VisualizaLista(miLista);

            // Agrego 5 elementos más de tipo cadena (string) a mi lista.
            Console.WriteLine("\nAgrego 5 elementos -string- nuevos en la lista");
            for (int i = 10; i <15; i++)
            {
                valor = "cadena " + i;
                miLista.Add(valor); // utilizo el método Add para añadir en la lista.
            }

            // Visualizo el estado de la lista
            VisualizaLista(miLista);

            Console.WriteLine("\nModifico los elementos en la posición 5 y 6 de la lista:");
            miLista[5] = "Cadena nueva A";
            miLista[6] = "Cadena nueva B";          

            // Visualizo el estado de la lista
            VisualizaLista(miLista);

            // Elimino el elemento "Cadena nueva A" y "Cadena nueva B"  
            Console.WriteLine("\nElimino los elementos \'Cadena nueva A\' y \'Cadena nueva B\'");
            miLista.Remove("Cadena nueva A");
            miLista.Remove("Cadena nueva B");

            // Elimino el elmento en la posición 2, que será el de índice 1
            Console.WriteLine("\nElimino el elemento en la posicion 2: \'Cadena 1\'");
            miLista.RemoveAt(1);
            
            // Visualizo el estado de la lista
            VisualizaLista(miLista);

            // Inserto el elemento "Otra Cadena C" y "Otra Cadena D" en posiciones 5 y 6 respectivamente  
            Console.WriteLine("\nInserto los elementos \'Otra Cadena C\' y \'Otra Cadena D\'");
            miLista.Insert(5,"Otra Cadena C");
            miLista.Insert(6,"Otra Cadena D");

            // Visualizo el estado de la lista
            VisualizaLista(miLista);

            // Elimino todos los elementos de la lista.  
            Console.WriteLine("\nElimino todos los elementos de la lista");
            miLista.Clear();

            // Visualizo el estado de la lista
            VisualizaLista(miLista);

            Console.ReadLine();
        }
    }
}
