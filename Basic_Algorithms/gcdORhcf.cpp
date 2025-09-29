#include<bits/stdc++.h>
using namespace std;

int main(){
    int a, b;
    cin >> a >> b;
    while (a != 0 && b != 0){
        a >= b ? a = a%b : b = b%a;
    }

    (a == 0 ? cout << b : cout << a);
    
}