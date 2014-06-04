#include <QCoreApplication>
#include <iostream>

using namespace std;

bool isCD(char chr_D) {
    if (chr_D == 'd') {
        return true;
    } else {
        return false;
    }
}

bool isPWD(char chr_W, char chr_D) {
    if (chr_W == 'w' && chr_D == 'd') {
        return true;
    } else {
        return false;
    }
}

string checkString(string wayToDir) {
    //int pFirst  = wayToDir.find('/');
    //int pSecond = wayToDir.find('/', pFirst + 1);

    for (int i = 0; i < wayToDir.length(); i++) {
        if (wayToDir[i] == '.') {
            int posSlash = i + 1;
            do {
                wayToDir.erase(posSlash, 1);
                cout << wayToDir << endl;
                posSlash--;
            } while (wayToDir[posSlash] != '/');
        }
    }
    return wayToDir;
}

int main(int argc, char *argv[])
{
    QCoreApplication a(argc, argv);

    int n = 0;
    string consoleCommand;
    string consoleTemp;
    string temp;
    cout << "Input n: ";
    cin >> n;

    cout << endl;

    for (int i = 0; i <= n; i++) {
        getline(cin, consoleCommand);

        switch (consoleCommand[0]) {
        case 'c':
            if (!isCD(consoleCommand[1])) {
                cout << "Wrong command!" << endl;
                break;
            }
            consoleTemp.append(&consoleCommand[3]);
            //consoleTemp += "\n";
            cout << checkString(consoleTemp) << endl;

            break;
        case 'p':
            if (!isPWD(consoleCommand[1], consoleCommand[2])) {
                cout << "Wrong command!" << endl;
                break;
            }
            break;
        }
    }

    return a.exec();
}
