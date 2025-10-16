// Simple Interface
interface A {void displayA();}

// Multiple Interface
interface X {void displayX();}
interface Y {void displayY();}

class B implements A {
    public void displayA() {
        System.out.println("Class B implementing A");
    }
}

// Class implementing multiple interfaces
class C implements X, Y {
    public void displayX() {
        System.out.println("Class C implementing X");
    }
    public void displayY() {
        System.out.println("Class C implementing Y");
    }
}

public class InterfaceDemo {
    public static void main(String[] args) {
        System.out.println("Name : Somnath Pandurang Jadhav | Roll No : 86");
        System.out.println("Class : BCA-III SEM-V | Subject : Java Programming\n");
        System.out.println("Simple Interface-");
        B objB = new B();
        objB.displayA();

        System.out.println("\nMultiple Interface-");
        C objC = new C();
        objC.displayX();
        objC.displayY();
    }
}
