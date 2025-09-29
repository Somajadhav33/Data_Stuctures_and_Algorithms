#include<bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cout << "Enter Nmmber : ";
    cin >> n;
    int count = 0;
    while(n != 0){
        n /= 10;
        count++;
    }
    cout << "Number of digits : " << count;
}