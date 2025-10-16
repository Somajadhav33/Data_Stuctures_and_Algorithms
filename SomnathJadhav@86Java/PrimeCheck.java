import java.util.Scanner;

public class PrimeCheck {
    public static void main(String[] args) {
        System.out.println("Name : Somnath Pandurang Jadhav | Roll No : 86");
        System.out.println("Class : BCA-III SEM-V | Subject : Java Programming");

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int num = sc.nextInt();
        boolean isPrime = true;

        if (num <= 1) {
            isPrime = false;
        } else {
            for (int i = 2; i <= num / 2; i++) { // Looping
                if (num % i == 0) { // Branching
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime)
            System.out.println(num + " is a Prime Number.");
        else
            System.out.println(num + " is not a Prime Number.");

    }
}
