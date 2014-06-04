using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task1
{
    class OS
    {
        public string Path { get; set; }

        public OS(string path=null)
        {
            if (string.IsNullOrEmpty(path))
            {
                Path = "/";
                return;
            }
            Path = path;
        }

        public string Listen(string cmd)
        {
            string[] args = cmd.Split(' ');
            string errorMsg = "Incorrect input.";

            if (args.Count() <= 0) 
            {
                return errorMsg;
            }
            switch (args[0])
            {
                case "cd":
                    {
                        return Path;
                    }
                case "pwd":
                    {
                        return Path;
                    }
                default:
                    {
                        return errorMsg;
                    }
            }
        }
    }
}
