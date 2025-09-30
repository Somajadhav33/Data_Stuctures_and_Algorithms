class Solution {
public:
    int addDigits(int num) {
        int n = 0;
        while(num != 0){
            n = n + num % 10;
            num /= 10;
        }
        return n < 10 ? n: addDigits(n);
    }
};