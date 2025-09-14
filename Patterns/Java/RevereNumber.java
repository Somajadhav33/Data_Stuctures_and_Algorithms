import java.util.*;
public class RevereNumber {
    public static void main(String [] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter An Number : ");
        int n = sc.nextInt();
        int reverse = 0;

        while(n >0){
            int lastDigit = n % 10;
            reverse = reverse * 10 + lastDigit;
            n /= 10;
        }
        System.out.println("Reverse Number : "+ reverse);
    }
}
