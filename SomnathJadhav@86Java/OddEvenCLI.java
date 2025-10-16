
public class OddEvenCLI {
    public static void main(String[] args) {
        System.out.println("Name : Somnath Pandurang Jadhav | Roll No : 86");
        System.out.println("Class : BCA-III SEM-V | Subject : Java Programming");
        for(int i = 0; i < args.length; i++) {
            int num = Integer.parseInt(args[i]);
            if(num % 2 == 0) {
                System.out.println("\n" + num + " is Even");
            } else {
                System.out.println("\n" + num + " is Odd");
            }
        }
    }
}
