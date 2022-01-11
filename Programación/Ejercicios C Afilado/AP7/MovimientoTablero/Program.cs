using System;
using System.Collections;

namespace MovimientoTablero
{
    class Program
    {
        static int CambioPosicionX(int posX, int longX)
        {
            do
            {
                Console.Write("Introduzca la nueva posición de X (entre 1 y 10): ");
                posX = int.Parse(Console.ReadLine());
                if (posX < 1 || posX > longX)
                {
                    Console.WriteLine("La posición introducida no es correcta");
                }
            } while (posX < 1 || posX > longX);

            return posX;
        }
        static int CambioPosicionY(int posY, int longY)
        {
            do
            {
                Console.Write("Introduzca la nueva posición de Y (entre 1 y 10): ");
                posY = int.Parse(Console.ReadLine());
                if (posY < 1 || posY > longY)
                {
                    Console.WriteLine("La posición introducida no es correcta");
                }
            } while (posY < 1 || posY > longY);
            return posY;
        }

        static void VisualizaTablero (int posX, int posY, int longY, int longX)
        {
            for (int y = 0; y < longY; y++)
            {
                Console.WriteLine(" ");
                for (int x = 0; x < longX; x++)
            {
                    
                    Console.Write(" 0 ");
                    if (y == posY-1 && x == posX-2)
                    {
                        Console.Write(" X ");
                        x++;
                    }
            }
            }   
        }

        static void VisualizaMenu()
        {
            int opcion, posicionX = 5, posicionY = 5, longitudX, longitudY;
            ArrayList listaMovimientos = new ArrayList();
            Console.Write("Establece la longitud de X ");
            longitudX = int.Parse(Console.ReadLine());
            Console.Write("Establece la longitud de Y ");
            longitudY = int.Parse(Console.ReadLine());

            do
            {
                Console.Clear();

                Console.WriteLine("Movimientos de un objeto: (Tablero de 10x10) - Posición inicial (5,5)");
                Console.WriteLine("==================");
                Console.WriteLine("1. Arriba.");
                Console.WriteLine("2. Abajo.");
                Console.WriteLine("3. Izquierda.");
                Console.WriteLine("4. Derecha.");
                Console.WriteLine("5. Cambiar posición en tablero.");
                Console.WriteLine("6. Visualizar el tablero.");
                Console.WriteLine("7. Visualizar lista de movimientos.");
                Console.WriteLine("8. Finalizar.");
                Console.WriteLine(" ");
                Console.Write("Introduce opción (1...8): ");

                opcion = int.Parse(Console.ReadLine());
                if (opcion < 1 || opcion > 8)
                {
                    Console.WriteLine("Esa funcionalidad no existe, introduzca un número del 1 al 8");
                    Console.ReadKey();
                }

                switch (opcion)
                {
                    case 1:
                        if (posicionY == longitudY)
                        {
                            Console.WriteLine("No se puede mover en esa dirección");
                            posicionY = longitudY;
                        } else
                        {
                            posicionY++;
                            listaMovimientos.Add("Arriba");

                        }
                        Console.WriteLine("Coord.X = {0} --- Coord.Y = {1} ", posicionX, posicionY);
                        Console.ReadKey();
                        break;
                    case 2:
                        if (posicionY == 1)
                        {
                            Console.WriteLine("No se puede mover en esa dirección");
                            posicionY = 1;
                        }
                        else
                        {
                            posicionY--;
                            listaMovimientos.Add("Abajo");

                        }
                        Console.WriteLine("Coord.X = {0} --- Coord.Y = {1} ", posicionX, posicionY);
                        Console.ReadKey();
                        break;
                    case 3:
                        if (posicionX == 1)
                        {
                            Console.WriteLine("No se puede mover en esa dirección");
                            posicionX = 1;
                        }
                        else
                        {
                            posicionX--;
                            listaMovimientos.Add("Izquierda");

                        }
                        Console.WriteLine("Coord.X = {0} --- Coord.Y = {1} ", posicionX, posicionY);
                        Console.ReadKey();
                        break;
                    case 4:
                        if (posicionX == longitudX)
                        {
                            Console.WriteLine("No se puede mover en esa dirección");
                            posicionX = longitudX;
                        }
                        else
                        {
                            posicionX++;
                            listaMovimientos.Add("Derecha");

                        }
                        Console.WriteLine("Coord.X = {0} --- Coord.Y = {1} ", posicionX, posicionY);
                        Console.ReadKey();
                        break;
                    case 5:
                        posicionX = CambioPosicionX(posicionX, longitudX);
                        posicionY = CambioPosicionY(posicionY, longitudY);
                        Console.WriteLine("Coord.X = {0} --- Coord.Y = {1} ", posicionX, posicionY);
                        Console.ReadKey();
                        break;
                    case 6:
                        VisualizaTablero(posicionX,posicionY, longitudY, longitudX);
                        Console.ReadKey();
                        break;
                    case 7:
                        for (int j = 0; j < listaMovimientos.Count; j++)
                        {
                            Console.WriteLine("Movimiento {0}: {1}", j+1, listaMovimientos[j]);
                            
                        }
                        Console.ReadKey();
                        break;

                }
                

            } while (opcion != 8);


            
            }
        static void Main(string[] args)
        {
            
            VisualizaMenu();

        }
    }
}
