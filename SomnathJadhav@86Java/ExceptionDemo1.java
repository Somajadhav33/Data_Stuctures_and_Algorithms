public class ExceptionDemo1 {
    public static void main(String[] args) {
        try {
            int a = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Name : Somnath Pandurang Jadhav | Roll No : 86 ");
            System.out.println("Class : BCA-III SEM-V | Subject : Java Programming\n");
            System.out.println("Cannot divide by zero");
        }
    }
}
