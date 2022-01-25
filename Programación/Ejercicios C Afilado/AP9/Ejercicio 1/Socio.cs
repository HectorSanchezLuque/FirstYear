using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ejercicio_1
{
    internal class Socio
    {
        private string name;
        private int age;
        private string IDN;
        private char sex;
        private int weight;
        private double height;

        //nombre,edad,peso,sexo,altura
        public Socio(string nombre, int edad, int peso, char sexo, double altura)
        {
            name = nombre;
            age = edad;
            weight = peso;
            sex = sexo;
            height = altura;
            IDN = GeneraNIF();
        }

        //Constructor por teclado
        public Socio()
        {
            Console.Write("Introduzca su nombre: ");
            name = Console.ReadLine();
            Console.Write("Introduzca su edad: ");
            age = int.Parse(Console.ReadLine());
            Console.Write("Introduzca su peso: ");
            weight = int.Parse(Console.ReadLine());
            Console.Write("Introduzca su sexo (H/M): ");
            sex = char.Parse(Console.ReadLine());
            Console.Write("Introduzca su altura: ");
            height = double.Parse(Console.ReadLine());
            IDN = GeneraNIF();
        }


        public string CalcularIMC()
        {
            double imc = (weight/(height*height))*10000;
            if (imc < 18.5)
            {
                Console.WriteLine("Tiene un IMC bajo");
                return "bajo";
            } else if (imc >= 18.5 && imc < 25)
            {
                Console.WriteLine("Tiene un IMC medio");
                return "medio";
            } else
            {
                Console.WriteLine("Tiene un IMC alto");
                return "alto";
            }
        }
        public bool EsMayorDeEdad()
        {
            if (age >= 18)
            {
                Console.WriteLine("Es mayor de edad");
                return true;
            } else
            {
                Console.WriteLine("No es mayor de edad");
                return false;
            }
        }

        public void Informa()
        {
            Console.WriteLine("=====================================================");
            Console.WriteLine("Nombre: {0}   DNI: {1}\n"+
                          "Edad: {2}     Sexo: {3}\n" +
                          "Peso: {4}     Altura: {5}", name,IDN,age,sex,weight,height);
                        
        }
        private string GeneraNIF()
        {
            string numerostr;
            Random rnd = new Random();
            int numero;
            string listanums = "";
            for(int i = 0; i < 8; i++)
            {
                numero = rnd.Next(1, 9);
                listanums += numero.ToString();
            }
            int resto = Convert.ToInt32(listanums) % 23;
            switch (resto)
            {
                case 0:
                    numerostr = listanums +"T";
                    return numerostr; 
                case 1:
                    numerostr = listanums+"R";
                    return numerostr; 
                case 2:
                    numerostr = listanums+"W";
                    return numerostr; 
                case 3:
                    numerostr = listanums+"A";
                    return numerostr; 
                case 4:
                    numerostr = listanums+"G";
                    return numerostr; 
                case 5:
                    numerostr = listanums+"M";
                    return numerostr; 
                case 6:
                    numerostr = listanums+"Y";
                    return numerostr; 
                case 7:
                    numerostr = listanums+"F";
                    return numerostr; 
                case 8:
                    numerostr = listanums+"P";
                    return numerostr; 
                case 9:
                    numerostr = listanums+"D";
                    return numerostr; 
                case 10:
                    numerostr = listanums+"X";
                    return numerostr; 
                case 11:
                    numerostr = listanums+"B";
                    return numerostr; 
                case 12:
                    numerostr = listanums+"N";
                    return numerostr; 
                case 13:
                    numerostr = listanums+"J";
                    return numerostr; 
                case 14:
                    numerostr = listanums+"Z";
                    return numerostr; 
                case 15:
                    numerostr = listanums+"S";
                    return numerostr; 
                case 16:
                    numerostr = listanums+"Q";
                    return numerostr; 
                case 17:
                    numerostr = listanums+"V";
                    return numerostr; 
                case 18:
                    numerostr = listanums+"H";
                    return numerostr; 
                case 19:
                    numerostr = listanums+"L";
                    return numerostr;                   
                case 20:
                    numerostr = listanums+"C";
                    return numerostr;
                case 21:
                    numerostr = listanums+"K";
                    return numerostr;                   
                case 22:
                    numerostr = listanums+"E";
                    return numerostr;        
            }
            return "nada";
        }



    }
}
