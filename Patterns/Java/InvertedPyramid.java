import java.util.*;

public class InvertedPyramid {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n;
        System.out.print("Enter a Number : ");
        n = sc.nextInt();
        for(int i = 1; i <= n; i++){
            for(int j = 1; j <= n-i+1 ; j++){
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
