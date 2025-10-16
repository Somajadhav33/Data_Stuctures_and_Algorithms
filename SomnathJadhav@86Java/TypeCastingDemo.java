
public class TypeCastingDemo {
    public static void main(String[] args) {
        System.out.println("Name : Somnath Pandurang Jadhav | Roll No : 86");
        System.out.println("Class : BCA-III SEM-V | Subject : Java Programming");

        System.out.println("\nImplicit Casting --");
        int num = 50;
        double d = num;

        System.out.println("Original int value: " + num);
        System.out.println("After casting to double: " + d);

        System.out.println("\nExplicit Casting --");
        double x = 99.75;
        int y = (int) x;

        System.out.println("Original double value: " + x);
        System.out.println("After casting to int: " + y);

    }
}
