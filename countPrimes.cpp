#include <bits/stdc++.h>
using namespace std;

int tribonacci(int n) {
        int n1 = 0, n2= 1, n3 = 1, i= 3;
        while(i <= n){
            int n4 = n1 + n2 + n3 ;
            n1 = n2; 
            n2 = n3;
            n3 = n4;
            i++;
        }
    }

int main(){
    tribonacci(25);

    return 0;
}