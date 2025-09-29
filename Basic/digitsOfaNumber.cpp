#include<bits/stdc++.h>
using namespace std;

int main(){
    int n;
    cout << "Enter Number : " ;
    cin >> n;
    stack<int> s; //used to print digits according to correct order
    while(n !=0){
        int lastDigit = n % 10;
        n /= 10;
        s.push(lastDigit);
    }
    while(!s.empty()){
       cout << s.top() << endl;
       s.pop();
    }
    return 0;
}