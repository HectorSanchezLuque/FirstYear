using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ejercicio_3
{
    class Cuadrilatero
    {
        private int lado1;
        private int lado2;

        public Cuadrilatero(int l1, int l2)
        {
            lado1 = l1;
            lado2 = l2;
        }

        public int AreaRectangulo()
        {
            int area = lado1 * lado2;
            return area;
        }
        public int PerRectangulo()
        {
            int perimetro = (2 * lado1) + (2 * lado2);
            return perimetro;
        }
        public int AreaCuadrado()
        {
            int area = lado1 * lado1;
            return area;
        }
        public int PerCuadrado()
        {
            int perimetro = 4 * lado1;
            return perimetro;
        }
    }
}
