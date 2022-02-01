using System;

namespace Ejercicio_4
{
    class Maquina
    {
        private double ganancia;
        private int numBotellas;
        private static int precio = 1;

        public Maquina (int nBotellas)
        {
            numBotellas = nBotellas;
        }

        public int getNumBotellas()
        {
            return numBotellas;
        }

        public double getGanancia()
        {
            return ganancia;
        }

        public void VerInfo()
        {
            Console.WriteLine("La máquina contiene {0} botellas \n" +
                                       "Ha generado {1} euros \n" +
                                       "El precio de cada botella es de {2} euros");
        }

        public string Extraer(Tarjeta t)
        {
            bool pregunta; string preguntita;
            if (numBotellas == 0)
            {
                Console.WriteLine("No quedan botellas");
            } else
            {
                   if (t.getSaldo()==0)
                    {
                        t.setSaldo(0);
                        Console.WriteLine("Saldo insuficiente");
                    }
                    else
                    {
                        Console.WriteLine("Cuántas botellas desea extraer?");
                        double saldoTemporal = t.getSaldo();
                        int money = int.Parse(Console.ReadLine());
                        t.Descontar(money * precio);

                        if (t.getSaldo() < 0)
                        {
                            double numBotellas = saldoTemporal / precio;
                            Console.WriteLine("No tiene suficiente saldo para extraer esa cantidad de botellas, el máximo que puede extraer con su saldo es: {0} botellas", numBotellas);
                            Console.WriteLine("Desea extraerlas? ");
                            preguntita = Console.ReadLine();
                            preguntita.ToLower();
                            if (preguntita == "si")
                            {
                                pregunta = true;
                            }
                            else
                            {
                                pregunta = false;
                            }
                            if (pregunta == true) 
                            {
                                t.Descontar(numBotellas*precio);
                            }

                        }
                    }
            }
            
            return "Gracias por su compra";
            
        }
    }
}
