using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ap4_Ej12
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int dado1; int dado2; int sumadados; const int total = 36000;
            Random rnd = new Random();
            float[] resultados = new float[11];
            string[] porcentajes = new string[11];
            for (int i = 0; i < total; i++)
            {
                
                dado1 = rnd.Next(1, 7);
                dado2 = rnd.Next(1, 7);

                sumadados = dado1 + dado2;

                switch (sumadados)
                {
                    case 2:
                        resultados[0]+=1;
                        break;
                    case 3:
                        resultados[1]+=1;
                        break;
                    case 4:
                        resultados[2]+=1;
                        break;
                    case 5:
                        resultados[3]+=1;
                        break;
                    case 6:
                        resultados[4]+=1;
                        break;
                    case 7:
                        resultados[5]+=1;
                        break;
                    case 8:
                        resultados[6]+=1;
                        break;
                    case 9:
                        resultados[7]+=1;
                        break;
                    case 10:
                        resultados[8]+=1;
                        break;
                    case 11:
                        resultados[9]+=1;
                        break;
                    case 12:
                        resultados[10]+=1;
                        break;
                }
            }
            for (int i = 0; i < porcentajes.Length; i++)
            {
                porcentajes[i] = (resultados[i]/total*100).ToString("N2");
            }

            Console.WriteLine("El valor 2 ha salido {0} ({1}%)\n" +
                              "El valor 3 ha salido {2} ({3}%)\n"+
                              "El valor 4 ha salido {4} ({5}%)\n"+
                              "El valor 5 ha salido {6} ({7}%)\n"+
                              "El valor 6 ha salido {8} ({9}%)\n"+
                              "El valor 7 ha salido {10} ({11}%)\n"+
                              "El valor 8 ha salido {12} ({13}%)\n"+
                              "El valor 9 ha salido {14} ({15}%)\n"+
                              "El valor 10 ha salido {16} ({17}%)\n"+
                              "El valor 11 ha salido {18} ({19}%)\n"+
                              "El valor 12 ha salido {20} ({21}%)\n",
                              resultados[0], porcentajes[0],
                              resultados[1], porcentajes[1],
                              resultados[2], porcentajes[2],
                              resultados[3], porcentajes[3],
                              resultados[4], porcentajes[4],
                              resultados[5], porcentajes[5],
                              resultados[6], porcentajes[6],
                              resultados[7], porcentajes[7],
                              resultados[8], porcentajes[8],
                              resultados[9], porcentajes[9],
                              resultados[10], porcentajes[10]);
            Console.ReadKey();
        }   

    }
}
