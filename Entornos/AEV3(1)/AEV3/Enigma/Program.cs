using System;

namespace Enigma
{
    class Program
    {
        static void Main(string[] args)
        {
            //string: mensaje cifrado o encriptado que hemos interceptado al enemigo
            string texto_cifrado = "kck*dojkoaoyjbylaojmkckaaytkjovjvdxobjkjvkbjymry"; 

            //Objeto de la clase mensaje
            Mensaje m = new Mensaje();
            
            //Llamada al método para descifrar
            m.descifrar(texto_cifrado);
        }
    }
}
