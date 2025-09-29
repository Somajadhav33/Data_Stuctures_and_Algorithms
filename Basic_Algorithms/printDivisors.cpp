#include<bits/stdc++.h>
using namespace std;

int main(){
    cout << "Enter Number : ";
    int n ;
    cin >> n;
    set<int> s;
    for(int i = 1 ;i*i <= n; i++){
        if(n%i ==0){
            s.insert(i);
            if(i != n/i){
                s.insert(n/i);
            }
        }
    }
    for(auto i: s){
        cout << i<< endl;
    }
    
}

