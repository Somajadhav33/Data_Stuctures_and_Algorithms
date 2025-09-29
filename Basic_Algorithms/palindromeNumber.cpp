#include<bits/stdc++.h>
using namespace std;

int main(){
    cout << "Enter Number : " ;
    int n;
    cin >> n;
    int originalNo = n;
    int reverse = 0;
    while(n != 0){
        reverse = reverse * 10 + (n % 10);
        n /= 10;
    }
    
    (reverse == originalNo? cout << "Palindrome" : cout << "Not Palindrome");


}