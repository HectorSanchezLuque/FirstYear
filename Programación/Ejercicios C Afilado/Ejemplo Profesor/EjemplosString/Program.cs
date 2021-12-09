using System;

namespace EjemplosString
{
    class Program
    {
        static void Main(string[] args)
        {
            // Ejemplo de uso de métodos ToUpper y ToLower
            string nombre = "Salvador".ToUpper();
            string apellidos = new string("Gutiérrez Gutiérrez"); 
            apellidos = apellidos.ToUpper();
            Console.WriteLine(nombre + "\t"+ apellidos);
            Console.ReadKey();

            // Extraemos el primer apellido del string que contiene los dos apellidos.
            string primerApe = apellidos.Substring(0, 9);
            Console.WriteLine("Primer apellido: {0}", primerApe);
            Console.ReadKey();

            // Indica la posición donde se encuentra la ocurrencia "EZ" dentro del string 
            // buscándola a partir de la posición 9.
            int posicion = apellidos.IndexOf("EZ",9);
            Console.WriteLine("Posición: {0}", posicion);
            Console.ReadKey();

            // Pruebas de métodos Starswitch y Endwitch
            string archivo = "empleados.dll  ";
            // Eliminamos en el string carácteres en blanco por ambos extremos (método trim).
            // También existe el método Rtrim y Ltrim para eliminar blancos por la derecha o izquierda.
            archivo = archivo.Trim();
            if (archivo.EndsWith("dll"))
            {
                Console.WriteLine(archivo + " es una libreria");
            }
            Console.ReadKey();

            // Pruebas de método PadRight y PadLeft 
            // Relleno de caracteres en un string hasta una longitud dada.
            string equipo = new string("Angeles");
            string codigo = "123";
            equipo = equipo.PadRight(15, 'X');
            codigo = codigo.PadLeft(6,'0');
            Console.WriteLine(equipo + "\t" + codigo);
            Console.ReadKey();

            // Prueba de metodo Split 
            // (partición de un string en varios utilizando un caracter -separador-)
            string linea = "prueba,10,20,juan,andres,true,10/12/2019";
            string[] partes = linea.Split(',');
            Console.WriteLine("Muestro el tercer elemento del array creado: {0}", partes[2]);
            for (int i = 0; i < partes.Length; i++)
            {
                Console.WriteLine(partes[i]);
            }
            Console.ReadKey();

            // Prueba de método join 
            // (Creación de un String uniendo varios string especificando un caracter separador)
            string lineanueva = String.Join(";", partes);
            Console.WriteLine(lineanueva);
            Console.ReadKey();
                         
            // prueba de método Replace y propiedad Length
            string mensaje = String.Format("La fecha de nacimiento de {0} es {1}", archivo, DateTime.Now.Date);
            Console.WriteLine(mensaje);
            mensaje = mensaje.Replace("nacimiento", "resurgimiento");
            Console.WriteLine(mensaje);
            Console.WriteLine("La longitud de la cadena es {0}", mensaje.Length);
            Console.ReadKey();
        }
    }
}
