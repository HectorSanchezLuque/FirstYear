namespace Ejercicio_4
{
    class Tablero
    {
        private int x = 5;
        private int y = 5;
        private int size;

        public Tablero(int equis, int yGriega, int tamn)
        {
            x = equis;
            y = yGriega;
            size = tamn;
        }

        public int getEquis()
        {
            return x;
        }
        public int getY()
        {
            return y;
        }
        public void desplazarArriba()
        {
            y = y - 1;
            if (y == 0)
            {
                y = 1;
            }

        }
        public void desplazarAbajo()
        {
            y = y + 1;
            if (y == (size +1))
            {
                y = size;
            }

        }
        public void desplazarIzquierda()
        {
            x = x - 1;
            if (x == 0)
            {
                x = 1;
            }

        }
        public void desplazarDerecha()
        {
            x = x + 1;
            if (x== (size+1))
            {
                x = size;
            }

        }
    }
}
