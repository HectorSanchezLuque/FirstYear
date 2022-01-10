using System;
using System.Collections.Generic;
using System.Text;

namespace Enigma
{
    class Mensaje
    {
        public string descifrar(string texto_cifrado)
        {

            string abecedario = "abcdefghijklmnopqrstuvwxyz*";

            int posicion;

            string descifrado = "";

            for (int i = 0; i < texto_cifrado.Length; i++)
            {

                posicion = abecedario.IndexOf(texto_cifrado[i]);

                posicion = posicion - 10;
                    
                if (posicion == abecedario.IndexOf("*"))
                {
                    posicion = 0;
                }
                
                                
                descifrado = descifrado + abecedario[posicion];
            }

            return descifrado; 
        }
    }
}
