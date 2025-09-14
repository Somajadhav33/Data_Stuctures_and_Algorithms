#include<bits/stdc++.h>
using namespace std;

int main(){
    int n;
    cout << "Enter an Number : ";
    cin >> n;
    int reverse = 0;
    while(n > 0){
        int lastDigit = n % 10;
        reverse = reverse * 10 + lastDigit;
        n = n/10;
    }

    cout << "Reverse Number : "<< reverse;
}