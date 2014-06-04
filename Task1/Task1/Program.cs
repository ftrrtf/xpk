using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task1
{
    class Program
    {
        static void Main()
        {
            OS vasya = new OS();
            Console.WriteLine(vasya.Listen("pwd"));
            vasya.Listen("cd \\home\\myfolder\\vasya\\..\\petya");
            Console.WriteLine(vasya.Listen("pwd"));
            Console.ReadLine();
        }
    }
}
