using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task1
{
    class OS
    {
        private Stack<string> _dirs;

        public OS(string path=null)
        {
            _dirs = new Stack<string>();
            if (string.IsNullOrEmpty(path)) return;

            foreach (string dir in path.Split('\\')) 
            {
                if (dir == "..")
                {
                    _dirs.Pop();
                }
                else
                {
                    _dirs.Push(dir);
                }
            }
        }    

        public string Path()
        {
            string result = "\\";
            foreach(string dir in _dirs)
            {
                if (result != "\\")
                {
                    result = "\\" + result;
                }
                result = dir + result;
            }
            return result;
        }

        public string Listen(string cmd)
        {
            string[] _args = cmd.Split(' ');
            string _errorMsg = "Incorrect input.";
     
            if (_args.Count() <= 0) 
            {
                return _errorMsg;
            }
            switch (_args[0])
            {
                case "cd":
                    {
                        if (_args.Count() <= 1) return _errorMsg;

                        string _path = _args[1];
                        if (_path[0] == '\\')
                        {
                            _dirs.Clear();
                        }

                        foreach (string dir in _path.Split('\\'))
                        {
                            switch (dir)
                            {
                                case "..":
                                    {
                                        _dirs.Pop();
                                        break;
                                    }
                                default:
                                    {
                                        _dirs.Push(dir);
                                        break;
                                    }
                            }

                        }

                        return Path();
                    }
                case "pwd":
                    {
                        return Path();
                    }
                default:
                    {
                        return _errorMsg;
                    }
            }
        }
    }
}
