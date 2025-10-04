using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ParameterPassing
{
    class Program
    {
        static void PassByValue(int a)
        {
            a = 20;
        }

        static void PassByReference(ref int b)
        {
            b = 30;
        }

        static void UseOut(out int c)
        {
            c = 40;
        }

        static void Main()
        {
            int x = 10, y = 10, z;

            PassByValue(x);
            Console.WriteLine("After PassByValue, x = " + x);

            PassByReference(ref y);
            Console.WriteLine("After PassByReference, y = " + y);

            UseOut(out z);
            Console.WriteLine("After UseOut, z = " + z);
            Console.Read();
        }
    }
}
