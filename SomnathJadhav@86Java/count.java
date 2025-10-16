public class count {
    public static void main(String[] args){
        int n = 54748, c = 0;
        int count = n;
        while(count > 0){
            count /= 10;
            c++;
        }
       int temp = n;
       int sum =0;
        while (temp > 0) {
            int lastDigit = temp % 10;
            int cube = 1;
            for(int i = 0; i < c; i++){
                cube *= lastDigit;
            }         
            sum += cube;
            temp /= 10;   
        }

        System.out.println(sum);


    }
}
