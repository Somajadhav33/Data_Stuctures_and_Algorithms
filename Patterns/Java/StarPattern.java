import java.util.*;

public class StarPattern {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n;
        System.out.print("Enter a Number : ");
        n = sc.nextInt();
        for(int i = 1; i <= n; i++){
            for(int j = 1; j <= i ; j++){
                System.out.print("* ");
            }
        }
    }
}
