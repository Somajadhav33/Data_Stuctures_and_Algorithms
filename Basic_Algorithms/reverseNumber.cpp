#include<bits/stdc++.h>
using namespace std;

int main(){
    cout << "Enter An Number : ";
    int n;
    cin >> n;
    int reverse = 0;
    while(n != 0){
        int last_digit = n % 10;
        reverse = reverse *10 +last_digit;
        n /= 10; 
    }
    cout << "Reverse Number Is : " << reverse << endl;

}