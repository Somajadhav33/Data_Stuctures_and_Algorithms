class Solution {
public:
    bool isPalindrome(int x) {
        int n = x;
        long long r = 0;
        while(n != 0){
            r = r * 10 + n % 10;
            n /= 10;
        }
        if (x < 0) r = -r;
        
        return (x == r) ? true : false;
    }
};