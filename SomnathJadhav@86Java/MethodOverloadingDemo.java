class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }

    double add(double a, double b) {
        return a + b;
    }
}

public class MethodOverloadingDemo {
    public static void main(String[] args) {
        System.out.println("Name : Somnath Pandurang Jadhav | Roll No : 86");
        System.out.println("Class : BCA-III SEM-V | Subject : Java Programming\n");
        Calculator calc = new Calculator();

        System.out.println("Add two integers: " + calc.add(10, 20));
        System.out.println("Add three integers: " + calc.add(5, 10, 15));
        System.out.println("Add two doubles: " + calc.add(2.5, 3.5));
    }
}
